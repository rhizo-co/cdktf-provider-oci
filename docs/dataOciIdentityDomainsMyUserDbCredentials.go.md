# `dataOciIdentityDomainsMyUserDbCredentials` Submodule <a name="`dataOciIdentityDomainsMyUserDbCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyUserDbCredentials <a name="DataOciIdentityDomainsMyUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials oci_identity_domains_my_user_db_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentials(scope Construct, id *string, config DataOciIdentityDomainsMyUserDbCredentialsConfig) DataOciIdentityDomainsMyUserDbCredentials
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig">DataOciIdentityDomainsMyUserDbCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig">DataOciIdentityDomainsMyUserDbCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialCount">ResetMyUserDbCredentialCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialFilter">ResetMyUserDbCredentialFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetId"></a>

```go
func ResetId()
```

##### `ResetMyUserDbCredentialCount` <a name="ResetMyUserDbCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialCount"></a>

```go
func ResetMyUserDbCredentialCount()
```

##### `ResetMyUserDbCredentialFilter` <a name="ResetMyUserDbCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetMyUserDbCredentialFilter"></a>

```go
func ResetMyUserDbCredentialFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyUserDbCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.DataOciIdentityDomainsMyUserDbCredentials_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.DataOciIdentityDomainsMyUserDbCredentials_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.DataOciIdentityDomainsMyUserDbCredentials_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.DataOciIdentityDomainsMyUserDbCredentials_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyUserDbCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsMyUserDbCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsMyUserDbCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyUserDbCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentials">MyUserDbCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCountInput">MyUserDbCredentialCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilterInput">MyUserDbCredentialFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCount">MyUserDbCredentialCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilter">MyUserDbCredentialFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `MyUserDbCredentials`<sup>Required</sup> <a name="MyUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentials"></a>

```go
func MyUserDbCredentials() DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MyUserDbCredentialCountInput`<sup>Optional</sup> <a name="MyUserDbCredentialCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCountInput"></a>

```go
func MyUserDbCredentialCountInput() *f64
```

- *Type:* *f64

---

##### `MyUserDbCredentialFilterInput`<sup>Optional</sup> <a name="MyUserDbCredentialFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilterInput"></a>

```go
func MyUserDbCredentialFilterInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `MyUserDbCredentialCount`<sup>Required</sup> <a name="MyUserDbCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialCount"></a>

```go
func MyUserDbCredentialCount() *f64
```

- *Type:* *f64

---

##### `MyUserDbCredentialFilter`<sup>Required</sup> <a name="MyUserDbCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.myUserDbCredentialFilter"></a>

```go
func MyUserDbCredentialFilter() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentials.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyUserDbCredentialsConfig <a name="DataOciIdentityDomainsMyUserDbCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

&dataociidentitydomainsmyuserdbcredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig {
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
	MyUserDbCredentialCount: *f64,
	MyUserDbCredentialFilter: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#idcs_endpoint DataOciIdentityDomainsMyUserDbCredentials#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#authorization DataOciIdentityDomainsMyUserDbCredentials#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#compartment_id DataOciIdentityDomainsMyUserDbCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#id DataOciIdentityDomainsMyUserDbCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialCount">MyUserDbCredentialCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_count DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialFilter">MyUserDbCredentialFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_filter DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsMyUserDbCredentials#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_by DataOciIdentityDomainsMyUserDbCredentials#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_order DataOciIdentityDomainsMyUserDbCredentials#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#start_index DataOciIdentityDomainsMyUserDbCredentials#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#idcs_endpoint DataOciIdentityDomainsMyUserDbCredentials#idcs_endpoint}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#authorization DataOciIdentityDomainsMyUserDbCredentials#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#compartment_id DataOciIdentityDomainsMyUserDbCredentials#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#id DataOciIdentityDomainsMyUserDbCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MyUserDbCredentialCount`<sup>Optional</sup> <a name="MyUserDbCredentialCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialCount"></a>

```go
MyUserDbCredentialCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_count DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_count}.

---

##### `MyUserDbCredentialFilter`<sup>Optional</sup> <a name="MyUserDbCredentialFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.myUserDbCredentialFilter"></a>

```go
MyUserDbCredentialFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#my_user_db_credential_filter DataOciIdentityDomainsMyUserDbCredentials#my_user_db_credential_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#resource_type_schema_version DataOciIdentityDomainsMyUserDbCredentials#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_by DataOciIdentityDomainsMyUserDbCredentials#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#sort_order DataOciIdentityDomainsMyUserDbCredentials#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_user_db_credentials#start_index DataOciIdentityDomainsMyUserDbCredentials#start_index}.

---

### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

&dataociidentitydomainsmyuserdbcredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials {

}
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

&dataociidentitydomainsmyuserdbcredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy {

}
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

&dataociidentitydomainsmyuserdbcredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

&dataociidentitydomainsmyuserdbcredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta {

}
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

&dataociidentitydomainsmyuserdbcredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags {

}
```


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

&dataociidentitydomainsmyuserdbcredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMeta</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.dbPassword">DbPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expired">Expired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expiresOn">ExpiresOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.lastSetDate">LastSetDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedDbPassword">MixedDbPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedSalt">MixedSalt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.salt">Salt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.user">User</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DbPassword`<sup>Required</sup> <a name="DbPassword" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.dbPassword"></a>

```go
func DbPassword() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `Expired`<sup>Required</sup> <a name="Expired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expired"></a>

```go
func Expired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.expiresOn"></a>

```go
func ExpiresOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `LastSetDate`<sup>Required</sup> <a name="LastSetDate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.lastSetDate"></a>

```go
func LastSetDate() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsMetaList</a>

---

##### `MixedDbPassword`<sup>Required</sup> <a name="MixedDbPassword" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedDbPassword"></a>

```go
func MixedDbPassword() *string
```

- *Type:* *string

---

##### `MixedSalt`<sup>Required</sup> <a name="MixedSalt" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.mixedSalt"></a>

```go
func MixedSalt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Salt`<sup>Required</sup> <a name="Salt" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.salt"></a>

```go
func Salt() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.user"></a>

```go
func User() DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentials</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsTags</a>

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference <a name="DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsmyuserdbcredentials"

dataociidentitydomainsmyuserdbcredentials.NewDataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUserOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyUserDbCredentials.DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser">DataOciIdentityDomainsMyUserDbCredentialsMyUserDbCredentialsUser</a>

---



