# `dataOciIdentityDomainsOauth2ClientCredentials` Submodule <a name="`dataOciIdentityDomainsOauth2ClientCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOauth2ClientCredentials <a name="DataOciIdentityDomainsOauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials oci_identity_domains_oauth2client_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentials(scope Construct, id *string, config DataOciIdentityDomainsOauth2ClientCredentialsConfig) DataOciIdentityDomainsOauth2ClientCredentials
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig">DataOciIdentityDomainsOauth2ClientCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig">DataOciIdentityDomainsOauth2ClientCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOauth2ClientCredentialCount">ResetOauth2ClientCredentialCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOauth2ClientCredentialFilter">ResetOauth2ClientCredentialFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetId"></a>

```go
func ResetId()
```

##### `ResetOauth2ClientCredentialCount` <a name="ResetOauth2ClientCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOauth2ClientCredentialCount"></a>

```go
func ResetOauth2ClientCredentialCount()
```

##### `ResetOauth2ClientCredentialFilter` <a name="ResetOauth2ClientCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetOauth2ClientCredentialFilter"></a>

```go
func ResetOauth2ClientCredentialFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsOauth2ClientCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentials_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentials_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentials_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentials_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsOauth2ClientCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsOauth2ClientCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsOauth2ClientCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOauth2ClientCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentials">Oauth2ClientCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialCountInput">Oauth2ClientCredentialCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialFilterInput">Oauth2ClientCredentialFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialCount">Oauth2ClientCredentialCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialFilter">Oauth2ClientCredentialFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `Oauth2ClientCredentials`<sup>Required</sup> <a name="Oauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentials"></a>

```go
func Oauth2ClientCredentials() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Oauth2ClientCredentialCountInput`<sup>Optional</sup> <a name="Oauth2ClientCredentialCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialCountInput"></a>

```go
func Oauth2ClientCredentialCountInput() *f64
```

- *Type:* *f64

---

##### `Oauth2ClientCredentialFilterInput`<sup>Optional</sup> <a name="Oauth2ClientCredentialFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialFilterInput"></a>

```go
func Oauth2ClientCredentialFilterInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `Oauth2ClientCredentialCount`<sup>Required</sup> <a name="Oauth2ClientCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialCount"></a>

```go
func Oauth2ClientCredentialCount() *f64
```

- *Type:* *f64

---

##### `Oauth2ClientCredentialFilter`<sup>Required</sup> <a name="Oauth2ClientCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.oauth2ClientCredentialFilter"></a>

```go
func Oauth2ClientCredentialFilter() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentials.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOauth2ClientCredentialsConfig <a name="DataOciIdentityDomainsOauth2ClientCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

&dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdcsEndpoint: *string,
	Attributes: *string,
	AttributeSets: *[]*string,
	Authorization: *string,
	CompartmentId: *string,
	Id: *string,
	Oauth2ClientCredentialCount: *f64,
	Oauth2ClientCredentialFilter: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#idcs_endpoint DataOciIdentityDomainsOauth2ClientCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#attributes DataOciIdentityDomainsOauth2ClientCredentials#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#attribute_sets DataOciIdentityDomainsOauth2ClientCredentials#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#authorization DataOciIdentityDomainsOauth2ClientCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#compartment_id DataOciIdentityDomainsOauth2ClientCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#id DataOciIdentityDomainsOauth2ClientCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.oauth2ClientCredentialCount">Oauth2ClientCredentialCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#oauth2client_credential_count DataOciIdentityDomainsOauth2ClientCredentials#oauth2client_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.oauth2ClientCredentialFilter">Oauth2ClientCredentialFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#oauth2client_credential_filter DataOciIdentityDomainsOauth2ClientCredentials#oauth2client_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#resource_type_schema_version DataOciIdentityDomainsOauth2ClientCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#sort_by DataOciIdentityDomainsOauth2ClientCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#sort_order DataOciIdentityDomainsOauth2ClientCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#start_index DataOciIdentityDomainsOauth2ClientCredentials#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#idcs_endpoint DataOciIdentityDomainsOauth2ClientCredentials#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#attributes DataOciIdentityDomainsOauth2ClientCredentials#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#attribute_sets DataOciIdentityDomainsOauth2ClientCredentials#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#authorization DataOciIdentityDomainsOauth2ClientCredentials#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#compartment_id DataOciIdentityDomainsOauth2ClientCredentials#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#id DataOciIdentityDomainsOauth2ClientCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Oauth2ClientCredentialCount`<sup>Optional</sup> <a name="Oauth2ClientCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.oauth2ClientCredentialCount"></a>

```go
Oauth2ClientCredentialCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#oauth2client_credential_count DataOciIdentityDomainsOauth2ClientCredentials#oauth2client_credential_count}.

---

##### `Oauth2ClientCredentialFilter`<sup>Optional</sup> <a name="Oauth2ClientCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.oauth2ClientCredentialFilter"></a>

```go
Oauth2ClientCredentialFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#oauth2client_credential_filter DataOciIdentityDomainsOauth2ClientCredentials#oauth2client_credential_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#resource_type_schema_version DataOciIdentityDomainsOauth2ClientCredentials#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#sort_by DataOciIdentityDomainsOauth2ClientCredentials#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#sort_order DataOciIdentityDomainsOauth2ClientCredentials#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oauth2client_credentials#start_index DataOciIdentityDomainsOauth2ClientCredentials#start_index}.

---

### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

&dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials {

}
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

&dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy {

}
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

&dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

&dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta {

}
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

&dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes {

}
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

&dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags {

}
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

&dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser {

}
```


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

&dataociidentitydomainsoauth2clientcredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMeta</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.expiresOn">ExpiresOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.isResetSecret">IsResetSecret</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.scopes">Scopes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">UrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.user">User</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.expiresOn"></a>

```go
func ExpiresOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `IsResetSecret`<sup>Required</sup> <a name="IsResetSecret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.isResetSecret"></a>

```go
func IsResetSecret() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsMetaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.scopes"></a>

```go
func Scopes() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `UrnietfparamsscimschemasoracleidcsextensionselfChangeUser`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```go
func UrnietfparamsscimschemasoracleidcsextensionselfChangeUser() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a>

---

##### `User`<sup>Required</sup> <a name="User" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.user"></a>

```go
func User() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentials</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsScopes</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsTags</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange">AllowSelfChange</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowSelfChange`<sup>Required</sup> <a name="AllowSelfChange" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange"></a>

```go
func AllowSelfChange() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference <a name="DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsoauth2clientcredentials"

dataociidentitydomainsoauth2clientcredentials.NewDataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUserOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOauth2ClientCredentials.DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser">DataOciIdentityDomainsOauth2ClientCredentialsOauth2ClientCredentialsUser</a>

---



