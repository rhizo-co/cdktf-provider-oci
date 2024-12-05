# `dataOciIdentityDomainsCustomerSecretKeys` Submodule <a name="`dataOciIdentityDomainsCustomerSecretKeys` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsCustomerSecretKeys <a name="DataOciIdentityDomainsCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys oci_identity_domains_customer_secret_keys}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeys(scope Construct, id *string, config DataOciIdentityDomainsCustomerSecretKeysConfig) DataOciIdentityDomainsCustomerSecretKeys
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig">DataOciIdentityDomainsCustomerSecretKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig">DataOciIdentityDomainsCustomerSecretKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCustomerSecretKeyCount">ResetCustomerSecretKeyCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCustomerSecretKeyFilter">ResetCustomerSecretKeyFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetCustomerSecretKeyCount` <a name="ResetCustomerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCustomerSecretKeyCount"></a>

```go
func ResetCustomerSecretKeyCount()
```

##### `ResetCustomerSecretKeyFilter` <a name="ResetCustomerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetCustomerSecretKeyFilter"></a>

```go
func ResetCustomerSecretKeyFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsCustomerSecretKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.DataOciIdentityDomainsCustomerSecretKeys_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.DataOciIdentityDomainsCustomerSecretKeys_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.DataOciIdentityDomainsCustomerSecretKeys_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.DataOciIdentityDomainsCustomerSecretKeys_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsCustomerSecretKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsCustomerSecretKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsCustomerSecretKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsCustomerSecretKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeys">CustomerSecretKeys</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyCountInput">CustomerSecretKeyCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyFilterInput">CustomerSecretKeyFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyCount">CustomerSecretKeyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyFilter">CustomerSecretKeyFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CustomerSecretKeys`<sup>Required</sup> <a name="CustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeys"></a>

```go
func CustomerSecretKeys() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList</a>

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CustomerSecretKeyCountInput`<sup>Optional</sup> <a name="CustomerSecretKeyCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyCountInput"></a>

```go
func CustomerSecretKeyCountInput() *f64
```

- *Type:* *f64

---

##### `CustomerSecretKeyFilterInput`<sup>Optional</sup> <a name="CustomerSecretKeyFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyFilterInput"></a>

```go
func CustomerSecretKeyFilterInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CustomerSecretKeyCount`<sup>Required</sup> <a name="CustomerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyCount"></a>

```go
func CustomerSecretKeyCount() *f64
```

- *Type:* *f64

---

##### `CustomerSecretKeyFilter`<sup>Required</sup> <a name="CustomerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.customerSecretKeyFilter"></a>

```go
func CustomerSecretKeyFilter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeys.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsCustomerSecretKeysConfig <a name="DataOciIdentityDomainsCustomerSecretKeysConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

&dataociidentitydomainscustomersecretkeys.DataOciIdentityDomainsCustomerSecretKeysConfig {
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
	CustomerSecretKeyCount: *f64,
	CustomerSecretKeyFilter: *string,
	Id: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsCustomerSecretKeys#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attributes DataOciIdentityDomainsCustomerSecretKeys#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attribute_sets DataOciIdentityDomainsCustomerSecretKeys#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#authorization DataOciIdentityDomainsCustomerSecretKeys#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#compartment_id DataOciIdentityDomainsCustomerSecretKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.customerSecretKeyCount">CustomerSecretKeyCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_count DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.customerSecretKeyFilter">CustomerSecretKeyFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_filter DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#id DataOciIdentityDomainsCustomerSecretKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsCustomerSecretKeys#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_by DataOciIdentityDomainsCustomerSecretKeys#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_order DataOciIdentityDomainsCustomerSecretKeys#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#start_index DataOciIdentityDomainsCustomerSecretKeys#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#idcs_endpoint DataOciIdentityDomainsCustomerSecretKeys#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attributes DataOciIdentityDomainsCustomerSecretKeys#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#attribute_sets DataOciIdentityDomainsCustomerSecretKeys#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#authorization DataOciIdentityDomainsCustomerSecretKeys#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#compartment_id DataOciIdentityDomainsCustomerSecretKeys#compartment_id}.

---

##### `CustomerSecretKeyCount`<sup>Optional</sup> <a name="CustomerSecretKeyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.customerSecretKeyCount"></a>

```go
CustomerSecretKeyCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_count DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_count}.

---

##### `CustomerSecretKeyFilter`<sup>Optional</sup> <a name="CustomerSecretKeyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.customerSecretKeyFilter"></a>

```go
CustomerSecretKeyFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#customer_secret_key_filter DataOciIdentityDomainsCustomerSecretKeys#customer_secret_key_filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#id DataOciIdentityDomainsCustomerSecretKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#resource_type_schema_version DataOciIdentityDomainsCustomerSecretKeys#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_by DataOciIdentityDomainsCustomerSecretKeys#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#sort_order DataOciIdentityDomainsCustomerSecretKeys#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_customer_secret_keys#start_index DataOciIdentityDomainsCustomerSecretKeys#start_index}.

---

### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

&dataociidentitydomainscustomersecretkeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys {

}
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

&dataociidentitydomainscustomersecretkeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy {

}
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

&dataociidentitydomainscustomersecretkeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

&dataociidentitydomainscustomersecretkeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta {

}
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

&dataociidentitydomainscustomersecretkeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags {

}
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

&dataociidentitydomainscustomersecretkeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser {

}
```


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

&dataociidentitydomainscustomersecretkeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedBy</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMeta</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.expiresOn">ExpiresOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.secretKey">SecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser">UrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.user">User</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.expiresOn"></a>

```go
func ExpiresOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.secretKey"></a>

```go
func SecretKey() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `UrnietfparamsscimschemasoracleidcsextensionselfChangeUser`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionselfChangeUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.urnietfparamsscimschemasoracleidcsextensionselfChangeUser"></a>

```go
func UrnietfparamsscimschemasoracleidcsextensionselfChangeUser() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList</a>

---

##### `User`<sup>Required</sup> <a name="User" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.user"></a>

```go
func User() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeys</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysTags</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange">AllowSelfChange</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowSelfChange`<sup>Required</sup> <a name="AllowSelfChange" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.allowSelfChange"></a>

```go
func AllowSelfChange() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUserOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUrnietfparamsscimschemasoracleidcsextensionselfChangeUser</a>

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference <a name="DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscustomersecretkeys"

dataociidentitydomainscustomersecretkeys.NewDataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUserOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCustomerSecretKeys.DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser">DataOciIdentityDomainsCustomerSecretKeysCustomerSecretKeysUser</a>

---



