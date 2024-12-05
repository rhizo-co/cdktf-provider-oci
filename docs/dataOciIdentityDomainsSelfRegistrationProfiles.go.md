# `dataOciIdentityDomainsSelfRegistrationProfiles` Submodule <a name="`dataOciIdentityDomainsSelfRegistrationProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSelfRegistrationProfiles <a name="DataOciIdentityDomainsSelfRegistrationProfiles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles oci_identity_domains_self_registration_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfiles(scope Construct, id *string, config DataOciIdentityDomainsSelfRegistrationProfilesConfig) DataOciIdentityDomainsSelfRegistrationProfiles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig">DataOciIdentityDomainsSelfRegistrationProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig">DataOciIdentityDomainsSelfRegistrationProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileCount">ResetSelfRegistrationProfileCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileFilter">ResetSelfRegistrationProfileFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSelfRegistrationProfileCount` <a name="ResetSelfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileCount"></a>

```go
func ResetSelfRegistrationProfileCount()
```

##### `ResetSelfRegistrationProfileFilter` <a name="ResetSelfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileFilter"></a>

```go
func ResetSelfRegistrationProfileFilter()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfiles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfiles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfiles_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfiles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsSelfRegistrationProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsSelfRegistrationProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSelfRegistrationProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfiles">SelfRegistrationProfiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCountInput">SelfRegistrationProfileCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilterInput">SelfRegistrationProfileFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCount">SelfRegistrationProfileCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilter">SelfRegistrationProfileFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `SelfRegistrationProfiles`<sup>Required</sup> <a name="SelfRegistrationProfiles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfiles"></a>

```go
func SelfRegistrationProfiles() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList</a>

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SelfRegistrationProfileCountInput`<sup>Optional</sup> <a name="SelfRegistrationProfileCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCountInput"></a>

```go
func SelfRegistrationProfileCountInput() *f64
```

- *Type:* *f64

---

##### `SelfRegistrationProfileFilterInput`<sup>Optional</sup> <a name="SelfRegistrationProfileFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilterInput"></a>

```go
func SelfRegistrationProfileFilterInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SelfRegistrationProfileCount`<sup>Required</sup> <a name="SelfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCount"></a>

```go
func SelfRegistrationProfileCount() *f64
```

- *Type:* *f64

---

##### `SelfRegistrationProfileFilter`<sup>Required</sup> <a name="SelfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilter"></a>

```go
func SelfRegistrationProfileFilter() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSelfRegistrationProfilesConfig <a name="DataOciIdentityDomainsSelfRegistrationProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig {
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
	ResourceTypeSchemaVersion: *string,
	SelfRegistrationProfileCount: *f64,
	SelfRegistrationProfileFilter: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfiles#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attributes DataOciIdentityDomainsSelfRegistrationProfiles#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attribute_sets DataOciIdentityDomainsSelfRegistrationProfiles#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#authorization DataOciIdentityDomainsSelfRegistrationProfiles#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#compartment_id DataOciIdentityDomainsSelfRegistrationProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#id DataOciIdentityDomainsSelfRegistrationProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfiles#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileCount">SelfRegistrationProfileCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_count DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileFilter">SelfRegistrationProfileFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_filter DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_by DataOciIdentityDomainsSelfRegistrationProfiles#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_order DataOciIdentityDomainsSelfRegistrationProfiles#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#start_index DataOciIdentityDomainsSelfRegistrationProfiles#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfiles#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attributes DataOciIdentityDomainsSelfRegistrationProfiles#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attribute_sets DataOciIdentityDomainsSelfRegistrationProfiles#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#authorization DataOciIdentityDomainsSelfRegistrationProfiles#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#compartment_id DataOciIdentityDomainsSelfRegistrationProfiles#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#id DataOciIdentityDomainsSelfRegistrationProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfiles#resource_type_schema_version}.

---

##### `SelfRegistrationProfileCount`<sup>Optional</sup> <a name="SelfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileCount"></a>

```go
SelfRegistrationProfileCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_count DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_count}.

---

##### `SelfRegistrationProfileFilter`<sup>Optional</sup> <a name="SelfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileFilter"></a>

```go
SelfRegistrationProfileFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_filter DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_filter}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_by DataOciIdentityDomainsSelfRegistrationProfiles#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_order DataOciIdentityDomainsSelfRegistrationProfiles#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#start_index DataOciIdentityDomainsSelfRegistrationProfiles#start_index}.

---

### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles {

}
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText {

}
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText {

}
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups {

}
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName {

}
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate {

}
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText {

}
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText {

}
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy {

}
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta {

}
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags {

}
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

&dataociidentitydomainsselfregistrationprofiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.activationEmailRequired">ActivationEmailRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.afterSubmitText">AfterSubmitText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.allowedEmailDomains">AllowedEmailDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentText">ConsentText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentTextPresent">ConsentTextPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.defaultGroups">DefaultGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.disallowedEmailDomains">DisallowedEmailDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.displayName">DisplayName</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.emailTemplate">EmailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerLogo">FooterLogo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerText">FooterText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerLogo">HeaderLogo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerText">HeaderText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.numberOfDaysRedirectUrlIsValid">NumberOfDaysRedirectUrlIsValid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.showOnLoginPage">ShowOnLoginPage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.userAttributes">UserAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActivationEmailRequired`<sup>Required</sup> <a name="ActivationEmailRequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.activationEmailRequired"></a>

```go
func ActivationEmailRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Active`<sup>Required</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AfterSubmitText`<sup>Required</sup> <a name="AfterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.afterSubmitText"></a>

```go
func AfterSubmitText() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList</a>

---

##### `AllowedEmailDomains`<sup>Required</sup> <a name="AllowedEmailDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.allowedEmailDomains"></a>

```go
func AllowedEmailDomains() *[]*string
```

- *Type:* *[]*string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `ConsentText`<sup>Required</sup> <a name="ConsentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentText"></a>

```go
func ConsentText() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList</a>

---

##### `ConsentTextPresent`<sup>Required</sup> <a name="ConsentTextPresent" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentTextPresent"></a>

```go
func ConsentTextPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DefaultGroups`<sup>Required</sup> <a name="DefaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.defaultGroups"></a>

```go
func DefaultGroups() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisallowedEmailDomains`<sup>Required</sup> <a name="DisallowedEmailDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.disallowedEmailDomains"></a>

```go
func DisallowedEmailDomains() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.displayName"></a>

```go
func DisplayName() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList</a>

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `EmailTemplate`<sup>Required</sup> <a name="EmailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.emailTemplate"></a>

```go
func EmailTemplate() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList</a>

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `FooterLogo`<sup>Required</sup> <a name="FooterLogo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerLogo"></a>

```go
func FooterLogo() *string
```

- *Type:* *string

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerText"></a>

```go
func FooterText() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList</a>

---

##### `HeaderLogo`<sup>Required</sup> <a name="HeaderLogo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerLogo"></a>

```go
func HeaderLogo() *string
```

- *Type:* *string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerText"></a>

```go
func HeaderText() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NumberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="NumberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.numberOfDaysRedirectUrlIsValid"></a>

```go
func NumberOfDaysRedirectUrlIsValid() *f64
```

- *Type:* *f64

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `ShowOnLoginPage`<sup>Required</sup> <a name="ShowOnLoginPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.showOnLoginPage"></a>

```go
func ShowOnLoginPage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `UserAttributes`<sup>Required</sup> <a name="UserAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.userAttributes"></a>

```go
func UserAttributes() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofiles"

dataociidentitydomainsselfregistrationprofiles.NewDataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.deletable">Deletable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fullyQualifiedAttributeName">FullyQualifiedAttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.seqNumber">SeqNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Deletable`<sup>Required</sup> <a name="Deletable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.deletable"></a>

```go
func Deletable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FullyQualifiedAttributeName`<sup>Required</sup> <a name="FullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fullyQualifiedAttributeName"></a>

```go
func FullyQualifiedAttributeName() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `SeqNumber`<sup>Required</sup> <a name="SeqNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.seqNumber"></a>

```go
func SeqNumber() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes</a>

---



