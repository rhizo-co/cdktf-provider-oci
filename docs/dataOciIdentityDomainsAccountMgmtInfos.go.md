# `dataOciIdentityDomainsAccountMgmtInfos` Submodule <a name="`dataOciIdentityDomainsAccountMgmtInfos` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsAccountMgmtInfos <a name="DataOciIdentityDomainsAccountMgmtInfos" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos oci_identity_domains_account_mgmt_infos}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfos(scope Construct, id *string, config DataOciIdentityDomainsAccountMgmtInfosConfig) DataOciIdentityDomainsAccountMgmtInfos
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig">DataOciIdentityDomainsAccountMgmtInfosConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig">DataOciIdentityDomainsAccountMgmtInfosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAccountMgmtInfoCount">ResetAccountMgmtInfoCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAccountMgmtInfoFilter">ResetAccountMgmtInfoFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountMgmtInfoCount` <a name="ResetAccountMgmtInfoCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAccountMgmtInfoCount"></a>

```go
func ResetAccountMgmtInfoCount()
```

##### `ResetAccountMgmtInfoFilter` <a name="ResetAccountMgmtInfoFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAccountMgmtInfoFilter"></a>

```go
func ResetAccountMgmtInfoFilter()
```

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsAccountMgmtInfos resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfos_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfos_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfos_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfos_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsAccountMgmtInfos resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsAccountMgmtInfos to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsAccountMgmtInfos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsAccountMgmtInfos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfos">AccountMgmtInfos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoCountInput">AccountMgmtInfoCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoFilterInput">AccountMgmtInfoFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoCount">AccountMgmtInfoCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoFilter">AccountMgmtInfoFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccountMgmtInfos`<sup>Required</sup> <a name="AccountMgmtInfos" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfos"></a>

```go
func AccountMgmtInfos() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AccountMgmtInfoCountInput`<sup>Optional</sup> <a name="AccountMgmtInfoCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoCountInput"></a>

```go
func AccountMgmtInfoCountInput() *f64
```

- *Type:* *f64

---

##### `AccountMgmtInfoFilterInput`<sup>Optional</sup> <a name="AccountMgmtInfoFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoFilterInput"></a>

```go
func AccountMgmtInfoFilterInput() *string
```

- *Type:* *string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `AccountMgmtInfoCount`<sup>Required</sup> <a name="AccountMgmtInfoCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoCount"></a>

```go
func AccountMgmtInfoCount() *f64
```

- *Type:* *f64

---

##### `AccountMgmtInfoFilter`<sup>Required</sup> <a name="AccountMgmtInfoFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoFilter"></a>

```go
func AccountMgmtInfoFilter() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

&dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos {

}
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

&dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp {

}
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

&dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy {

}
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

&dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

&dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners {

}
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

&dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta {

}
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

&dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass {

}
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

&dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner {

}
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

&dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType {

}
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

&dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags {

}
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

&dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact {

}
```


### DataOciIdentityDomainsAccountMgmtInfosConfig <a name="DataOciIdentityDomainsAccountMgmtInfosConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

&dataociidentitydomainsaccountmgmtinfos.DataOciIdentityDomainsAccountMgmtInfosConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdcsEndpoint: *string,
	AccountMgmtInfoCount: *f64,
	AccountMgmtInfoFilter: *string,
	Attributes: *string,
	AttributeSets: *[]*string,
	Authorization: *string,
	CompartmentId: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfos#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.accountMgmtInfoCount">AccountMgmtInfoCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_count DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.accountMgmtInfoFilter">AccountMgmtInfoFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_filter DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attributes DataOciIdentityDomainsAccountMgmtInfos#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attribute_sets DataOciIdentityDomainsAccountMgmtInfos#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#authorization DataOciIdentityDomainsAccountMgmtInfos#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#compartment_id DataOciIdentityDomainsAccountMgmtInfos#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfos#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_by DataOciIdentityDomainsAccountMgmtInfos#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_order DataOciIdentityDomainsAccountMgmtInfos#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#start_index DataOciIdentityDomainsAccountMgmtInfos#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfos#idcs_endpoint}.

---

##### `AccountMgmtInfoCount`<sup>Optional</sup> <a name="AccountMgmtInfoCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.accountMgmtInfoCount"></a>

```go
AccountMgmtInfoCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_count DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_count}.

---

##### `AccountMgmtInfoFilter`<sup>Optional</sup> <a name="AccountMgmtInfoFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.accountMgmtInfoFilter"></a>

```go
AccountMgmtInfoFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_filter DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_filter}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attributes DataOciIdentityDomainsAccountMgmtInfos#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attribute_sets DataOciIdentityDomainsAccountMgmtInfos#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#authorization DataOciIdentityDomainsAccountMgmtInfos#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#compartment_id DataOciIdentityDomainsAccountMgmtInfos#compartment_id}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfos#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_by DataOciIdentityDomainsAccountMgmtInfos#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_order DataOciIdentityDomainsAccountMgmtInfos#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#start_index DataOciIdentityDomainsAccountMgmtInfos#start_index}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.appIcon">AppIcon</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.appThumbnail">AppThumbnail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isAliasApp">IsAliasApp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isAuthoritative">IsAuthoritative</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isLoginTarget">IsLoginTarget</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isManagedApp">IsManagedApp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isOauthResource">IsOauthResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isOpcService">IsOpcService</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isUnmanagedApp">IsUnmanagedApp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.loginMechanism">LoginMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.meterAsOpcService">MeterAsOpcService</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.serviceTypeUrn">ServiceTypeUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.showInMyApps">ShowInMyApps</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AppIcon`<sup>Required</sup> <a name="AppIcon" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.appIcon"></a>

```go
func AppIcon() *string
```

- *Type:* *string

---

##### `AppThumbnail`<sup>Required</sup> <a name="AppThumbnail" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.appThumbnail"></a>

```go
func AppThumbnail() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `IsAliasApp`<sup>Required</sup> <a name="IsAliasApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isAliasApp"></a>

```go
func IsAliasApp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsAuthoritative`<sup>Required</sup> <a name="IsAuthoritative" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isAuthoritative"></a>

```go
func IsAuthoritative() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsLoginTarget`<sup>Required</sup> <a name="IsLoginTarget" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isLoginTarget"></a>

```go
func IsLoginTarget() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsManagedApp`<sup>Required</sup> <a name="IsManagedApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isManagedApp"></a>

```go
func IsManagedApp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOauthResource`<sup>Required</sup> <a name="IsOauthResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isOauthResource"></a>

```go
func IsOauthResource() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOpcService`<sup>Required</sup> <a name="IsOpcService" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isOpcService"></a>

```go
func IsOpcService() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsUnmanagedApp`<sup>Required</sup> <a name="IsUnmanagedApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isUnmanagedApp"></a>

```go
func IsUnmanagedApp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LoginMechanism`<sup>Required</sup> <a name="LoginMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.loginMechanism"></a>

```go
func LoginMechanism() *string
```

- *Type:* *string

---

##### `MeterAsOpcService`<sup>Required</sup> <a name="MeterAsOpcService" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.meterAsOpcService"></a>

```go
func MeterAsOpcService() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `ServiceTypeUrn`<sup>Required</sup> <a name="ServiceTypeUrn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.serviceTypeUrn"></a>

```go
func ServiceTypeUrn() *string
```

- *Type:* *string

---

##### `ShowInMyApps`<sup>Required</sup> <a name="ShowInMyApps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.showInMyApps"></a>

```go
func ShowInMyApps() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.accountMgmtInfoId">AccountMgmtInfoId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.accountType">AccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.app">App</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.compositeKey">CompositeKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.doNotBackFillGrants">DoNotBackFillGrants</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.doNotPerformActionOnTarget">DoNotPerformActionOnTarget</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.favorite">Favorite</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.isAccount">IsAccount</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.lastAccessed">LastAccessed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.matchingOwners">MatchingOwners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.objectClass">ObjectClass</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.operationContext">OperationContext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.owner">Owner</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.previewOnly">PreviewOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.resourceType">ResourceType</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncResponse">SyncResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncSituation">SyncSituation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncTimestamp">SyncTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.userWalletArtifact">UserWalletArtifact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountMgmtInfoId`<sup>Required</sup> <a name="AccountMgmtInfoId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.accountMgmtInfoId"></a>

```go
func AccountMgmtInfoId() *string
```

- *Type:* *string

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.accountType"></a>

```go
func AccountType() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `App`<sup>Required</sup> <a name="App" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.app"></a>

```go
func App() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList</a>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `CompositeKey`<sup>Required</sup> <a name="CompositeKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.compositeKey"></a>

```go
func CompositeKey() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `DoNotBackFillGrants`<sup>Required</sup> <a name="DoNotBackFillGrants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.doNotBackFillGrants"></a>

```go
func DoNotBackFillGrants() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DoNotPerformActionOnTarget`<sup>Required</sup> <a name="DoNotPerformActionOnTarget" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.doNotPerformActionOnTarget"></a>

```go
func DoNotPerformActionOnTarget() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Favorite`<sup>Required</sup> <a name="Favorite" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.favorite"></a>

```go
func Favorite() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `IsAccount`<sup>Required</sup> <a name="IsAccount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.isAccount"></a>

```go
func IsAccount() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastAccessed`<sup>Required</sup> <a name="LastAccessed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.lastAccessed"></a>

```go
func LastAccessed() *string
```

- *Type:* *string

---

##### `MatchingOwners`<sup>Required</sup> <a name="MatchingOwners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.matchingOwners"></a>

```go
func MatchingOwners() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList</a>

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectClass`<sup>Required</sup> <a name="ObjectClass" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.objectClass"></a>

```go
func ObjectClass() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OperationContext`<sup>Required</sup> <a name="OperationContext" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.operationContext"></a>

```go
func OperationContext() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.owner"></a>

```go
func Owner() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList</a>

---

##### `PreviewOnly`<sup>Required</sup> <a name="PreviewOnly" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.previewOnly"></a>

```go
func PreviewOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.resourceType"></a>

```go
func ResourceType() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList</a>

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `SyncResponse`<sup>Required</sup> <a name="SyncResponse" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncResponse"></a>

```go
func SyncResponse() *string
```

- *Type:* *string

---

##### `SyncSituation`<sup>Required</sup> <a name="SyncSituation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncSituation"></a>

```go
func SyncSituation() *string
```

- *Type:* *string

---

##### `SyncTimestamp`<sup>Required</sup> <a name="SyncTimestamp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncTimestamp"></a>

```go
func SyncTimestamp() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UserWalletArtifact`<sup>Required</sup> <a name="UserWalletArtifact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.userWalletArtifact"></a>

```go
func UserWalletArtifact() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsaccountmgmtinfos"

dataociidentitydomainsaccountmgmtinfos.NewDataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact</a>

---



