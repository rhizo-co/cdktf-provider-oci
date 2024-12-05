# `dataOciIdentityDomainsSocialIdentityProviders` Submodule <a name="`dataOciIdentityDomainsSocialIdentityProviders` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSocialIdentityProviders <a name="DataOciIdentityDomainsSocialIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers oci_identity_domains_social_identity_providers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProviders(scope Construct, id *string, config DataOciIdentityDomainsSocialIdentityProvidersConfig) DataOciIdentityDomainsSocialIdentityProviders
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig">DataOciIdentityDomainsSocialIdentityProvidersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig">DataOciIdentityDomainsSocialIdentityProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderCount">ResetSocialIdentityProviderCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderFilter">ResetSocialIdentityProviderFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSocialIdentityProviderCount` <a name="ResetSocialIdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderCount"></a>

```go
func ResetSocialIdentityProviderCount()
```

##### `ResetSocialIdentityProviderFilter` <a name="ResetSocialIdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderFilter"></a>

```go
func ResetSocialIdentityProviderFilter()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProviders resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.DataOciIdentityDomainsSocialIdentityProviders_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.DataOciIdentityDomainsSocialIdentityProviders_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.DataOciIdentityDomainsSocialIdentityProviders_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.DataOciIdentityDomainsSocialIdentityProviders_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsSocialIdentityProviders to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsSocialIdentityProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSocialIdentityProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviders">SocialIdentityProviders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCountInput">SocialIdentityProviderCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilterInput">SocialIdentityProviderFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCount">SocialIdentityProviderCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilter">SocialIdentityProviderFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `SocialIdentityProviders`<sup>Required</sup> <a name="SocialIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviders"></a>

```go
func SocialIdentityProviders() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList</a>

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SocialIdentityProviderCountInput`<sup>Optional</sup> <a name="SocialIdentityProviderCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCountInput"></a>

```go
func SocialIdentityProviderCountInput() *f64
```

- *Type:* *f64

---

##### `SocialIdentityProviderFilterInput`<sup>Optional</sup> <a name="SocialIdentityProviderFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilterInput"></a>

```go
func SocialIdentityProviderFilterInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SocialIdentityProviderCount`<sup>Required</sup> <a name="SocialIdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCount"></a>

```go
func SocialIdentityProviderCount() *f64
```

- *Type:* *f64

---

##### `SocialIdentityProviderFilter`<sup>Required</sup> <a name="SocialIdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilter"></a>

```go
func SocialIdentityProviderFilter() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSocialIdentityProvidersConfig <a name="DataOciIdentityDomainsSocialIdentityProvidersConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

&dataociidentitydomainssocialidentityproviders.DataOciIdentityDomainsSocialIdentityProvidersConfig {
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
	ResourceTypeSchemaVersion: *string,
	SocialIdentityProviderCount: *f64,
	SocialIdentityProviderFilter: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderCount">SocialIdentityProviderCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderFilter">SocialIdentityProviderFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}.

---

##### `SocialIdentityProviderCount`<sup>Optional</sup> <a name="SocialIdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderCount"></a>

```go
SocialIdentityProviderCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}.

---

##### `SocialIdentityProviderFilter`<sup>Optional</sup> <a name="SocialIdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderFilter"></a>

```go
SocialIdentityProviderFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}.

---

### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

&dataociidentitydomainssocialidentityproviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders {

}
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

&dataociidentitydomainssocialidentityproviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy {

}
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

&dataociidentitydomainssocialidentityproviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

&dataociidentitydomainssocialidentityproviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups {

}
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

&dataociidentitydomainssocialidentityproviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta {

}
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

&dataociidentitydomainssocialidentityproviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings {

}
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

&dataociidentitydomainssocialidentityproviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accountLinkingEnabled">AccountLinkingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.adminScope">AdminScope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authzUrl">AuthzUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.autoRedirectEnabled">AutoRedirectEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clientCredentialInPayload">ClientCredentialInPayload</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clockSkewInSeconds">ClockSkewInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerKey">ConsumerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerSecret">ConsumerSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.iconUrl">IconUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idAttribute">IdAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvAssignedGroups">JitProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvGroupStaticListEnabled">JitProvGroupStaticListEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.profileUrl">ProfileUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.refreshTokenUrl">RefreshTokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.registrationEnabled">RegistrationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.relayIdpParamMappings">RelayIdpParamMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.scope">Scope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.serviceProviderName">ServiceProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.showOnLogin">ShowOnLogin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.socialJitProvisioningEnabled">SocialJitProvisioningEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accessTokenUrl"></a>

```go
func AccessTokenUrl() *string
```

- *Type:* *string

---

##### `AccountLinkingEnabled`<sup>Required</sup> <a name="AccountLinkingEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accountLinkingEnabled"></a>

```go
func AccountLinkingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AdminScope`<sup>Required</sup> <a name="AdminScope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.adminScope"></a>

```go
func AdminScope() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `AuthzUrl`<sup>Required</sup> <a name="AuthzUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authzUrl"></a>

```go
func AuthzUrl() *string
```

- *Type:* *string

---

##### `AutoRedirectEnabled`<sup>Required</sup> <a name="AutoRedirectEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.autoRedirectEnabled"></a>

```go
func AutoRedirectEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClientCredentialInPayload`<sup>Required</sup> <a name="ClientCredentialInPayload" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clientCredentialInPayload"></a>

```go
func ClientCredentialInPayload() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClockSkewInSeconds`<sup>Required</sup> <a name="ClockSkewInSeconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clockSkewInSeconds"></a>

```go
func ClockSkewInSeconds() *f64
```

- *Type:* *f64

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerKey"></a>

```go
func ConsumerKey() *string
```

- *Type:* *string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerSecret"></a>

```go
func ConsumerSecret() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.discoveryUrl"></a>

```go
func DiscoveryUrl() *string
```

- *Type:* *string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.iconUrl"></a>

```go
func IconUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdAttribute`<sup>Required</sup> <a name="IdAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idAttribute"></a>

```go
func IdAttribute() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `JitProvAssignedGroups`<sup>Required</sup> <a name="JitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvAssignedGroups"></a>

```go
func JitProvAssignedGroups() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList</a>

---

##### `JitProvGroupStaticListEnabled`<sup>Required</sup> <a name="JitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvGroupStaticListEnabled"></a>

```go
func JitProvGroupStaticListEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.profileUrl"></a>

```go
func ProfileUrl() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

##### `RefreshTokenUrl`<sup>Required</sup> <a name="RefreshTokenUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.refreshTokenUrl"></a>

```go
func RefreshTokenUrl() *string
```

- *Type:* *string

---

##### `RegistrationEnabled`<sup>Required</sup> <a name="RegistrationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.registrationEnabled"></a>

```go
func RegistrationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RelayIdpParamMappings`<sup>Required</sup> <a name="RelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.relayIdpParamMappings"></a>

```go
func RelayIdpParamMappings() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList</a>

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.scope"></a>

```go
func Scope() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceProviderName`<sup>Required</sup> <a name="ServiceProviderName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.serviceProviderName"></a>

```go
func ServiceProviderName() *string
```

- *Type:* *string

---

##### `ShowOnLogin`<sup>Required</sup> <a name="ShowOnLogin" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.showOnLogin"></a>

```go
func ShowOnLogin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SocialJitProvisioningEnabled`<sup>Required</sup> <a name="SocialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.socialJitProvisioningEnabled"></a>

```go
func SocialJitProvisioningEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamKey">RelayParamKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamValue">RelayParamValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelayParamKey`<sup>Required</sup> <a name="RelayParamKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamKey"></a>

```go
func RelayParamKey() *string
```

- *Type:* *string

---

##### `RelayParamValue`<sup>Required</sup> <a name="RelayParamValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamValue"></a>

```go
func RelayParamValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssocialidentityproviders"

dataociidentitydomainssocialidentityproviders.NewDataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags</a>

---



