# `dataOciIdentityDomainsIdentityProviders` Submodule <a name="`dataOciIdentityDomainsIdentityProviders` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsIdentityProviders <a name="DataOciIdentityDomainsIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers oci_identity_domains_identity_providers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProviders(scope Construct, id *string, config DataOciIdentityDomainsIdentityProvidersConfig) DataOciIdentityDomainsIdentityProviders
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig">DataOciIdentityDomainsIdentityProvidersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig">DataOciIdentityDomainsIdentityProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetIdentityProviderCount">ResetIdentityProviderCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetIdentityProviderFilter">ResetIdentityProviderFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentityProviderCount` <a name="ResetIdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetIdentityProviderCount"></a>

```go
func ResetIdentityProviderCount()
```

##### `ResetIdentityProviderFilter` <a name="ResetIdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetIdentityProviderFilter"></a>

```go
func ResetIdentityProviderFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsIdentityProviders resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProviders_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProviders_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProviders_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProviders_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsIdentityProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsIdentityProviders to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsIdentityProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsIdentityProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviders">IdentityProviders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderCountInput">IdentityProviderCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderFilterInput">IdentityProviderFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderCount">IdentityProviderCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderFilter">IdentityProviderFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `IdentityProviders`<sup>Required</sup> <a name="IdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviders"></a>

```go
func IdentityProviders() DataOciIdentityDomainsIdentityProvidersIdentityProvidersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersList</a>

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdentityProviderCountInput`<sup>Optional</sup> <a name="IdentityProviderCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderCountInput"></a>

```go
func IdentityProviderCountInput() *f64
```

- *Type:* *f64

---

##### `IdentityProviderFilterInput`<sup>Optional</sup> <a name="IdentityProviderFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderFilterInput"></a>

```go
func IdentityProviderFilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdentityProviderCount`<sup>Required</sup> <a name="IdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderCount"></a>

```go
func IdentityProviderCount() *f64
```

- *Type:* *f64

---

##### `IdentityProviderFilter`<sup>Required</sup> <a name="IdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.identityProviderFilter"></a>

```go
func IdentityProviderFilter() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProviders.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsIdentityProvidersConfig <a name="DataOciIdentityDomainsIdentityProvidersConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersConfig {
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
	IdentityProviderCount: *f64,
	IdentityProviderFilter: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#idcs_endpoint DataOciIdentityDomainsIdentityProviders#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#attributes DataOciIdentityDomainsIdentityProviders#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#attribute_sets DataOciIdentityDomainsIdentityProviders#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#authorization DataOciIdentityDomainsIdentityProviders#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#compartment_id DataOciIdentityDomainsIdentityProviders#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#id DataOciIdentityDomainsIdentityProviders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.identityProviderCount">IdentityProviderCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#identity_provider_count DataOciIdentityDomainsIdentityProviders#identity_provider_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.identityProviderFilter">IdentityProviderFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#identity_provider_filter DataOciIdentityDomainsIdentityProviders#identity_provider_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#resource_type_schema_version DataOciIdentityDomainsIdentityProviders#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#sort_by DataOciIdentityDomainsIdentityProviders#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#sort_order DataOciIdentityDomainsIdentityProviders#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#start_index DataOciIdentityDomainsIdentityProviders#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#idcs_endpoint DataOciIdentityDomainsIdentityProviders#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#attributes DataOciIdentityDomainsIdentityProviders#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#attribute_sets DataOciIdentityDomainsIdentityProviders#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#authorization DataOciIdentityDomainsIdentityProviders#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#compartment_id DataOciIdentityDomainsIdentityProviders#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#id DataOciIdentityDomainsIdentityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderCount`<sup>Optional</sup> <a name="IdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.identityProviderCount"></a>

```go
IdentityProviderCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#identity_provider_count DataOciIdentityDomainsIdentityProviders#identity_provider_count}.

---

##### `IdentityProviderFilter`<sup>Optional</sup> <a name="IdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.identityProviderFilter"></a>

```go
IdentityProviderFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#identity_provider_filter DataOciIdentityDomainsIdentityProviders#identity_provider_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#resource_type_schema_version DataOciIdentityDomainsIdentityProviders#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#sort_by DataOciIdentityDomainsIdentityProviders#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#sort_order DataOciIdentityDomainsIdentityProviders#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_providers#start_index DataOciIdentityDomainsIdentityProviders#start_index}.

---

### DataOciIdentityDomainsIdentityProvidersIdentityProviders <a name="DataOciIdentityDomainsIdentityProvidersIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProviders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProviders.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersIdentityProviders {

}
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy {

}
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy {

}
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups {

}
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes {

}
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings {

}
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta {

}
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags {

}
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider {

}
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups {

}
```


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

&dataociidentitydomainsidentityproviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy">DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy">DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicy</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedBy</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroups</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributes</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.idpGroup">IdpGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdpGroup`<sup>Required</sup> <a name="IdpGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.idpGroup"></a>

```go
func IdpGroup() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappings</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta">DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta">DataOciIdentityDomainsIdentityProvidersIdentityProvidersMeta</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.assertionAttribute">AssertionAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.authnRequestBinding">AuthnRequestBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.correlationPolicy">CorrelationPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.encryptionCertificate">EncryptionCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.iconUrl">IconUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idpSsoUrl">IdpSsoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.includeSigningCertInSignature">IncludeSigningCertInSignature</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvAssignedGroups">JitUserProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvAttributes">JitUserProvAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvAttributeUpdateEnabled">JitUserProvAttributeUpdateEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvCreateUserEnabled">JitUserProvCreateUserEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvEnabled">JitUserProvEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupAssertionAttributeEnabled">JitUserProvGroupAssertionAttributeEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupAssignmentMethod">JitUserProvGroupAssignmentMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupMappingMode">JitUserProvGroupMappingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupMappings">JitUserProvGroupMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupSamlAttributeName">JitUserProvGroupSamlAttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupStaticListEnabled">JitUserProvGroupStaticListEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvIgnoreErrorOnAbsentGroups">JitUserProvIgnoreErrorOnAbsentGroups</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.lastNotificationSentTime">LastNotificationSentTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutBinding">LogoutBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutEnabled">LogoutEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutRequestUrl">LogoutRequestUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutResponseUrl">LogoutResponseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.nameIdFormat">NameIdFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.partnerName">PartnerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.partnerProviderId">PartnerProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.requestedAuthenticationContext">RequestedAuthenticationContext</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.requireForceAuthn">RequireForceAuthn</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.requiresEncryptedAssertion">RequiresEncryptedAssertion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.samlHoKrequired">SamlHoKrequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.serviceInstanceIdentifier">ServiceInstanceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.shownOnLoginPage">ShownOnLoginPage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.signatureHashAlgorithm">SignatureHashAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.signingCertificate">SigningCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.succinctId">SuccinctId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.tenantProviderId">TenantProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.userMappingMethod">UserMappingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.userMappingStoreAttribute">UserMappingStoreAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProviders">DataOciIdentityDomainsIdentityProvidersIdentityProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssertionAttribute`<sup>Required</sup> <a name="AssertionAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.assertionAttribute"></a>

```go
func AssertionAttribute() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `AuthnRequestBinding`<sup>Required</sup> <a name="AuthnRequestBinding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.authnRequestBinding"></a>

```go
func AuthnRequestBinding() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `CorrelationPolicy`<sup>Required</sup> <a name="CorrelationPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.correlationPolicy"></a>

```go
func CorrelationPolicy() DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersCorrelationPolicyList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EncryptionCertificate`<sup>Required</sup> <a name="EncryptionCertificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.encryptionCertificate"></a>

```go
func EncryptionCertificate() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.iconUrl"></a>

```go
func IconUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `IdpSsoUrl`<sup>Required</sup> <a name="IdpSsoUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.idpSsoUrl"></a>

```go
func IdpSsoUrl() *string
```

- *Type:* *string

---

##### `IncludeSigningCertInSignature`<sup>Required</sup> <a name="IncludeSigningCertInSignature" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.includeSigningCertInSignature"></a>

```go
func IncludeSigningCertInSignature() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `JitUserProvAssignedGroups`<sup>Required</sup> <a name="JitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvAssignedGroups"></a>

```go
func JitUserProvAssignedGroups() DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAssignedGroupsList</a>

---

##### `JitUserProvAttributes`<sup>Required</sup> <a name="JitUserProvAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvAttributes"></a>

```go
func JitUserProvAttributes() DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvAttributesList</a>

---

##### `JitUserProvAttributeUpdateEnabled`<sup>Required</sup> <a name="JitUserProvAttributeUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvAttributeUpdateEnabled"></a>

```go
func JitUserProvAttributeUpdateEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `JitUserProvCreateUserEnabled`<sup>Required</sup> <a name="JitUserProvCreateUserEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvCreateUserEnabled"></a>

```go
func JitUserProvCreateUserEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `JitUserProvEnabled`<sup>Required</sup> <a name="JitUserProvEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvEnabled"></a>

```go
func JitUserProvEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `JitUserProvGroupAssertionAttributeEnabled`<sup>Required</sup> <a name="JitUserProvGroupAssertionAttributeEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupAssertionAttributeEnabled"></a>

```go
func JitUserProvGroupAssertionAttributeEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `JitUserProvGroupAssignmentMethod`<sup>Required</sup> <a name="JitUserProvGroupAssignmentMethod" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupAssignmentMethod"></a>

```go
func JitUserProvGroupAssignmentMethod() *string
```

- *Type:* *string

---

##### `JitUserProvGroupMappingMode`<sup>Required</sup> <a name="JitUserProvGroupMappingMode" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupMappingMode"></a>

```go
func JitUserProvGroupMappingMode() *string
```

- *Type:* *string

---

##### `JitUserProvGroupMappings`<sup>Required</sup> <a name="JitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupMappings"></a>

```go
func JitUserProvGroupMappings() DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersJitUserProvGroupMappingsList</a>

---

##### `JitUserProvGroupSamlAttributeName`<sup>Required</sup> <a name="JitUserProvGroupSamlAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupSamlAttributeName"></a>

```go
func JitUserProvGroupSamlAttributeName() *string
```

- *Type:* *string

---

##### `JitUserProvGroupStaticListEnabled`<sup>Required</sup> <a name="JitUserProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvGroupStaticListEnabled"></a>

```go
func JitUserProvGroupStaticListEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `JitUserProvIgnoreErrorOnAbsentGroups`<sup>Required</sup> <a name="JitUserProvIgnoreErrorOnAbsentGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.jitUserProvIgnoreErrorOnAbsentGroups"></a>

```go
func JitUserProvIgnoreErrorOnAbsentGroups() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastNotificationSentTime`<sup>Required</sup> <a name="LastNotificationSentTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.lastNotificationSentTime"></a>

```go
func LastNotificationSentTime() *string
```

- *Type:* *string

---

##### `LogoutBinding`<sup>Required</sup> <a name="LogoutBinding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutBinding"></a>

```go
func LogoutBinding() *string
```

- *Type:* *string

---

##### `LogoutEnabled`<sup>Required</sup> <a name="LogoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutEnabled"></a>

```go
func LogoutEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LogoutRequestUrl`<sup>Required</sup> <a name="LogoutRequestUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutRequestUrl"></a>

```go
func LogoutRequestUrl() *string
```

- *Type:* *string

---

##### `LogoutResponseUrl`<sup>Required</sup> <a name="LogoutResponseUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.logoutResponseUrl"></a>

```go
func LogoutResponseUrl() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersMetaList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `NameIdFormat`<sup>Required</sup> <a name="NameIdFormat" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.nameIdFormat"></a>

```go
func NameIdFormat() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `PartnerName`<sup>Required</sup> <a name="PartnerName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.partnerName"></a>

```go
func PartnerName() *string
```

- *Type:* *string

---

##### `PartnerProviderId`<sup>Required</sup> <a name="PartnerProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.partnerProviderId"></a>

```go
func PartnerProviderId() *string
```

- *Type:* *string

---

##### `RequestedAuthenticationContext`<sup>Required</sup> <a name="RequestedAuthenticationContext" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.requestedAuthenticationContext"></a>

```go
func RequestedAuthenticationContext() *[]*string
```

- *Type:* *[]*string

---

##### `RequireForceAuthn`<sup>Required</sup> <a name="RequireForceAuthn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.requireForceAuthn"></a>

```go
func RequireForceAuthn() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RequiresEncryptedAssertion`<sup>Required</sup> <a name="RequiresEncryptedAssertion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.requiresEncryptedAssertion"></a>

```go
func RequiresEncryptedAssertion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SamlHoKrequired`<sup>Required</sup> <a name="SamlHoKrequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.samlHoKrequired"></a>

```go
func SamlHoKrequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceInstanceIdentifier`<sup>Required</sup> <a name="ServiceInstanceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.serviceInstanceIdentifier"></a>

```go
func ServiceInstanceIdentifier() *string
```

- *Type:* *string

---

##### `ShownOnLoginPage`<sup>Required</sup> <a name="ShownOnLoginPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.shownOnLoginPage"></a>

```go
func ShownOnLoginPage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SignatureHashAlgorithm`<sup>Required</sup> <a name="SignatureHashAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.signatureHashAlgorithm"></a>

```go
func SignatureHashAlgorithm() *string
```

- *Type:* *string

---

##### `SigningCertificate`<sup>Required</sup> <a name="SigningCertificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.signingCertificate"></a>

```go
func SigningCertificate() *string
```

- *Type:* *string

---

##### `SuccinctId`<sup>Required</sup> <a name="SuccinctId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.succinctId"></a>

```go
func SuccinctId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `TenantProviderId`<sup>Required</sup> <a name="TenantProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.tenantProviderId"></a>

```go
func TenantProviderId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```go
func UrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider() DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList</a>

---

##### `Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider`<sup>Required</sup> <a name="Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```go
func Urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider() DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList</a>

---

##### `UserMappingMethod`<sup>Required</sup> <a name="UserMappingMethod" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.userMappingMethod"></a>

```go
func UserMappingMethod() *string
```

- *Type:* *string

---

##### `UserMappingStoreAttribute`<sup>Required</sup> <a name="UserMappingStoreAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.userMappingStoreAttribute"></a>

```go
func UserMappingStoreAttribute() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsIdentityProvidersIdentityProviders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProviders">DataOciIdentityDomainsIdentityProvidersIdentityProviders</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags">DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags">DataOciIdentityDomainsIdentityProvidersIdentityProvidersTags</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled">AccountLinkingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope">AdminScope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl">AuthzUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled">AutoRedirectEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload">ClientCredentialInPayload</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds">ClockSkewInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey">ConsumerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret">ConsumerSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute">IdAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups">JitProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled">JitProvGroupStaticListEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl">ProfileUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled">RegistrationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope">Scope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName">ServiceProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled">SocialJitProvisioningEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl"></a>

```go
func AccessTokenUrl() *string
```

- *Type:* *string

---

##### `AccountLinkingEnabled`<sup>Required</sup> <a name="AccountLinkingEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled"></a>

```go
func AccountLinkingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AdminScope`<sup>Required</sup> <a name="AdminScope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope"></a>

```go
func AdminScope() *[]*string
```

- *Type:* *[]*string

---

##### `AuthzUrl`<sup>Required</sup> <a name="AuthzUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl"></a>

```go
func AuthzUrl() *string
```

- *Type:* *string

---

##### `AutoRedirectEnabled`<sup>Required</sup> <a name="AutoRedirectEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled"></a>

```go
func AutoRedirectEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClientCredentialInPayload`<sup>Required</sup> <a name="ClientCredentialInPayload" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload"></a>

```go
func ClientCredentialInPayload() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClockSkewInSeconds`<sup>Required</sup> <a name="ClockSkewInSeconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds"></a>

```go
func ClockSkewInSeconds() *f64
```

- *Type:* *f64

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey"></a>

```go
func ConsumerKey() *string
```

- *Type:* *string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret"></a>

```go
func ConsumerSecret() *string
```

- *Type:* *string

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl"></a>

```go
func DiscoveryUrl() *string
```

- *Type:* *string

---

##### `IdAttribute`<sup>Required</sup> <a name="IdAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute"></a>

```go
func IdAttribute() *string
```

- *Type:* *string

---

##### `JitProvAssignedGroups`<sup>Required</sup> <a name="JitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups"></a>

```go
func JitProvAssignedGroups() DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a>

---

##### `JitProvGroupStaticListEnabled`<sup>Required</sup> <a name="JitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled"></a>

```go
func JitProvGroupStaticListEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl"></a>

```go
func ProfileUrl() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

##### `RegistrationEnabled`<sup>Required</sup> <a name="RegistrationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled"></a>

```go
func RegistrationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope"></a>

```go
func Scope() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceProviderName`<sup>Required</sup> <a name="ServiceProviderName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName"></a>

```go
func ServiceProviderName() *string
```

- *Type:* *string

---

##### `SocialJitProvisioningEnabled`<sup>Required</sup> <a name="SocialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled"></a>

```go
func SocialJitProvisioningEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference <a name="DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsidentityproviders"

dataociidentitydomainsidentityproviders.NewDataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute">CertMatchAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled">CrlCheckOnOcspFailureEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled">CrlEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation">CrlLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration">CrlReloadDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled">EkuValidationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues">EkuValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus">OcspAllowUnknownResponseStatus</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled">OcspEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse">OcspEnableSignedResponse</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl">OcspResponderUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime">OcspRevalidateTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName">OcspServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain">OcspTrustCertChain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute">OtherCertMatchAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain">SigningCertificateChain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute">UserMatchAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertMatchAttribute`<sup>Required</sup> <a name="CertMatchAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute"></a>

```go
func CertMatchAttribute() *string
```

- *Type:* *string

---

##### `CrlCheckOnOcspFailureEnabled`<sup>Required</sup> <a name="CrlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled"></a>

```go
func CrlCheckOnOcspFailureEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CrlEnabled`<sup>Required</sup> <a name="CrlEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled"></a>

```go
func CrlEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CrlLocation`<sup>Required</sup> <a name="CrlLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation"></a>

```go
func CrlLocation() *string
```

- *Type:* *string

---

##### `CrlReloadDuration`<sup>Required</sup> <a name="CrlReloadDuration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration"></a>

```go
func CrlReloadDuration() *f64
```

- *Type:* *f64

---

##### `EkuValidationEnabled`<sup>Required</sup> <a name="EkuValidationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled"></a>

```go
func EkuValidationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EkuValues`<sup>Required</sup> <a name="EkuValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues"></a>

```go
func EkuValues() *[]*string
```

- *Type:* *[]*string

---

##### `OcspAllowUnknownResponseStatus`<sup>Required</sup> <a name="OcspAllowUnknownResponseStatus" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus"></a>

```go
func OcspAllowUnknownResponseStatus() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OcspEnabled`<sup>Required</sup> <a name="OcspEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled"></a>

```go
func OcspEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OcspEnableSignedResponse`<sup>Required</sup> <a name="OcspEnableSignedResponse" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse"></a>

```go
func OcspEnableSignedResponse() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OcspResponderUrl`<sup>Required</sup> <a name="OcspResponderUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl"></a>

```go
func OcspResponderUrl() *string
```

- *Type:* *string

---

##### `OcspRevalidateTime`<sup>Required</sup> <a name="OcspRevalidateTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime"></a>

```go
func OcspRevalidateTime() *f64
```

- *Type:* *f64

---

##### `OcspServerName`<sup>Required</sup> <a name="OcspServerName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName"></a>

```go
func OcspServerName() *string
```

- *Type:* *string

---

##### `OcspTrustCertChain`<sup>Required</sup> <a name="OcspTrustCertChain" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain"></a>

```go
func OcspTrustCertChain() *[]*string
```

- *Type:* *[]*string

---

##### `OtherCertMatchAttribute`<sup>Required</sup> <a name="OtherCertMatchAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute"></a>

```go
func OtherCertMatchAttribute() *string
```

- *Type:* *string

---

##### `SigningCertificateChain`<sup>Required</sup> <a name="SigningCertificateChain" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain"></a>

```go
func SigningCertificateChain() *[]*string
```

- *Type:* *[]*string

---

##### `UserMatchAttribute`<sup>Required</sup> <a name="UserMatchAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute"></a>

```go
func UserMatchAttribute() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProviders.DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">DataOciIdentityDomainsIdentityProvidersIdentityProvidersUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

---



