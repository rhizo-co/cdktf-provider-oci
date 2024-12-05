# `dataOciIdentityDomainsGroups` Submodule <a name="`dataOciIdentityDomainsGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsGroups <a name="DataOciIdentityDomainsGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups oci_identity_domains_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroups(scope Construct, id *string, config DataOciIdentityDomainsGroupsConfig) DataOciIdentityDomainsGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig">DataOciIdentityDomainsGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig">DataOciIdentityDomainsGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetGroupCount">ResetGroupCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetGroupFilter">ResetGroupFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetGroupCount` <a name="ResetGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetGroupCount"></a>

```go
func ResetGroupCount()
```

##### `ResetGroupFilter` <a name="ResetGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetGroupFilter"></a>

```go
func ResetGroupFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsGroups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.DataOciIdentityDomainsGroups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.DataOciIdentityDomainsGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.DataOciIdentityDomainsGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.DataOciIdentityDomainsGroups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.groups">Groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList">DataOciIdentityDomainsGroupsGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.groupCountInput">GroupCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.groupFilterInput">GroupFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.groupCount">GroupCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.groupFilter">GroupFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.groups"></a>

```go
func Groups() DataOciIdentityDomainsGroupsGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList">DataOciIdentityDomainsGroupsGroupsList</a>

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `GroupCountInput`<sup>Optional</sup> <a name="GroupCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.groupCountInput"></a>

```go
func GroupCountInput() *f64
```

- *Type:* *f64

---

##### `GroupFilterInput`<sup>Optional</sup> <a name="GroupFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.groupFilterInput"></a>

```go
func GroupFilterInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `GroupCount`<sup>Required</sup> <a name="GroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.groupCount"></a>

```go
func GroupCount() *f64
```

- *Type:* *f64

---

##### `GroupFilter`<sup>Required</sup> <a name="GroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.groupFilter"></a>

```go
func GroupFilter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsGroupsConfig <a name="DataOciIdentityDomainsGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsConfig {
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
	GroupCount: *f64,
	GroupFilter: *string,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#idcs_endpoint DataOciIdentityDomainsGroups#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#attributes DataOciIdentityDomainsGroups#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#attribute_sets DataOciIdentityDomainsGroups#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#authorization DataOciIdentityDomainsGroups#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#compartment_id DataOciIdentityDomainsGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.groupCount">GroupCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#group_count DataOciIdentityDomainsGroups#group_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.groupFilter">GroupFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#group_filter DataOciIdentityDomainsGroups#group_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#id DataOciIdentityDomainsGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#resource_type_schema_version DataOciIdentityDomainsGroups#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#sort_by DataOciIdentityDomainsGroups#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#sort_order DataOciIdentityDomainsGroups#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#start_index DataOciIdentityDomainsGroups#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#idcs_endpoint DataOciIdentityDomainsGroups#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#attributes DataOciIdentityDomainsGroups#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#attribute_sets DataOciIdentityDomainsGroups#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#authorization DataOciIdentityDomainsGroups#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#compartment_id DataOciIdentityDomainsGroups#compartment_id}.

---

##### `GroupCount`<sup>Optional</sup> <a name="GroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.groupCount"></a>

```go
GroupCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#group_count DataOciIdentityDomainsGroups#group_count}.

---

##### `GroupFilter`<sup>Optional</sup> <a name="GroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.groupFilter"></a>

```go
GroupFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#group_filter DataOciIdentityDomainsGroups#group_filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#id DataOciIdentityDomainsGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#resource_type_schema_version DataOciIdentityDomainsGroups#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#sort_by DataOciIdentityDomainsGroups#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#sort_order DataOciIdentityDomainsGroups#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_groups#start_index DataOciIdentityDomainsGroups#start_index}.

---

### DataOciIdentityDomainsGroupsGroups <a name="DataOciIdentityDomainsGroupsGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroups {

}
```


### DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy <a name="DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy {

}
```


### DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy <a name="DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsGroupsGroupsMembers <a name="DataOciIdentityDomainsGroupsGroupsMembers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsMembers {

}
```


### DataOciIdentityDomainsGroupsGroupsMeta <a name="DataOciIdentityDomainsGroupsGroupsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsMeta {

}
```


### DataOciIdentityDomainsGroupsGroupsTags <a name="DataOciIdentityDomainsGroupsGroupsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsTags {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup {

}
```


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

&dataociidentitydomainsgroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList <a name="DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy">DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy">DataOciIdentityDomainsGroupsGroupsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList <a name="DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy">DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy">DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsGroupsGroupsList <a name="DataOciIdentityDomainsGroupsGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsMembersList <a name="DataOciIdentityDomainsGroupsGroupsMembersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsMembersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsMembersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsMembersOutputReference <a name="DataOciIdentityDomainsGroupsGroupsMembersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsMembersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsMembersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.dateAdded">DateAdded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.membershipOcid">MembershipOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembers">DataOciIdentityDomainsGroupsGroupsMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateAdded`<sup>Required</sup> <a name="DateAdded" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.dateAdded"></a>

```go
func DateAdded() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `MembershipOcid`<sup>Required</sup> <a name="MembershipOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.membershipOcid"></a>

```go
func MembershipOcid() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsMembers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembers">DataOciIdentityDomainsGroupsGroupsMembers</a>

---


### DataOciIdentityDomainsGroupsGroupsMetaList <a name="DataOciIdentityDomainsGroupsGroupsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsMetaOutputReference <a name="DataOciIdentityDomainsGroupsGroupsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMeta">DataOciIdentityDomainsGroupsGroupsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMeta">DataOciIdentityDomainsGroupsGroupsMeta</a>

---


### DataOciIdentityDomainsGroupsGroupsOutputReference <a name="DataOciIdentityDomainsGroupsGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.forceDelete">ForceDelete</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList">DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList">DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.members">Members</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList">DataOciIdentityDomainsGroupsGroupsMembersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList">DataOciIdentityDomainsGroupsGroupsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.nonUniqueDisplayName">NonUniqueDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList">DataOciIdentityDomainsGroupsGroupsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensiondbcsGroup">UrnietfparamsscimschemasoracleidcsextensiondbcsGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensiondynamicGroup">UrnietfparamsscimschemasoracleidcsextensiondynamicGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensiongroupGroup">UrnietfparamsscimschemasoracleidcsextensiongroupGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionOciTags">UrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionposixGroup">UrnietfparamsscimschemasoracleidcsextensionposixGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionrequestableGroup">UrnietfparamsscimschemasoracleidcsextensionrequestableGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroups">DataOciIdentityDomainsGroupsGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.forceDelete"></a>

```go
func ForceDelete() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList">DataOciIdentityDomainsGroupsGroupsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList">DataOciIdentityDomainsGroupsGroupsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Members`<sup>Required</sup> <a name="Members" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.members"></a>

```go
func Members() DataOciIdentityDomainsGroupsGroupsMembersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMembersList">DataOciIdentityDomainsGroupsGroupsMembersList</a>

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsGroupsGroupsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsMetaList">DataOciIdentityDomainsGroupsGroupsMetaList</a>

---

##### `NonUniqueDisplayName`<sup>Required</sup> <a name="NonUniqueDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.nonUniqueDisplayName"></a>

```go
func NonUniqueDisplayName() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsGroupsGroupsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList">DataOciIdentityDomainsGroupsGroupsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `UrnietfparamsscimschemasoracleidcsextensiondbcsGroup`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensiondbcsGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensiondbcsGroup"></a>

```go
func UrnietfparamsscimschemasoracleidcsextensiondbcsGroup() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensiondynamicGroup`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensiondynamicGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensiondynamicGroup"></a>

```go
func UrnietfparamsscimschemasoracleidcsextensiondynamicGroup() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensiongroupGroup`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensiongroupGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensiongroupGroup"></a>

```go
func UrnietfparamsscimschemasoracleidcsextensiongroupGroup() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionOciTags`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionOciTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionOciTags"></a>

```go
func UrnietfparamsscimschemasoracleidcsextensionOciTags() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionposixGroup`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionposixGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionposixGroup"></a>

```go
func UrnietfparamsscimschemasoracleidcsextensionposixGroup() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionrequestableGroup`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionrequestableGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionrequestableGroup"></a>

```go
func UrnietfparamsscimschemasoracleidcsextensionrequestableGroup() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroups">DataOciIdentityDomainsGroupsGroups</a>

---


### DataOciIdentityDomainsGroupsGroupsTagsList <a name="DataOciIdentityDomainsGroupsGroupsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsTagsOutputReference <a name="DataOciIdentityDomainsGroupsGroupsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTags">DataOciIdentityDomainsGroupsGroupsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsTags">DataOciIdentityDomainsGroupsGroupsTags</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNames</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.property.dbInstanceId">DbInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbInstanceId`<sup>Required</sup> <a name="DbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.property.dbInstanceId"></a>

```go
func DbInstanceId() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNames</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.domainLevelSchema">DomainLevelSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.domainLevelSchemaNames">DomainLevelSchemaNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.instanceLevelSchema">InstanceLevelSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.instanceLevelSchemaNames">InstanceLevelSchemaNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainLevelSchema`<sup>Required</sup> <a name="DomainLevelSchema" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.domainLevelSchema"></a>

```go
func DomainLevelSchema() *string
```

- *Type:* *string

---

##### `DomainLevelSchemaNames`<sup>Required</sup> <a name="DomainLevelSchemaNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.domainLevelSchemaNames"></a>

```go
func DomainLevelSchemaNames() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupDomainLevelSchemaNamesList</a>

---

##### `InstanceLevelSchema`<sup>Required</sup> <a name="InstanceLevelSchema" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.instanceLevelSchema"></a>

```go
func InstanceLevelSchema() *string
```

- *Type:* *string

---

##### `InstanceLevelSchemaNames`<sup>Required</sup> <a name="InstanceLevelSchemaNames" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.instanceLevelSchemaNames"></a>

```go
func InstanceLevelSchemaNames() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupInstanceLevelSchemaNamesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondbcsGroup</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.property.membershipRule">MembershipRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.property.membershipType">MembershipType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MembershipRule`<sup>Required</sup> <a name="MembershipRule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.property.membershipRule"></a>

```go
func MembershipRule() *string
```

- *Type:* *string

---

##### `MembershipType`<sup>Required</sup> <a name="MembershipType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.property.membershipType"></a>

```go
func MembershipType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiondynamicGroup</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.adminRole">AdminRole</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appName">AppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.legacyGroupName">LegacyGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminRole`<sup>Required</sup> <a name="AdminRole" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.adminRole"></a>

```go
func AdminRole() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appName"></a>

```go
func AppName() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `LegacyGroupName`<sup>Required</sup> <a name="LegacyGroupName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.legacyGroupName"></a>

```go
func LegacyGroupName() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.grantMechanism">GrantMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `GrantMechanism`<sup>Required</sup> <a name="GrantMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.grantMechanism"></a>

```go
func GrantMechanism() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.appRoles">AppRoles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationMechanism">CreationMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.grants">Grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.owners">Owners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.syncedFromApp">SyncedFromApp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppRoles`<sup>Required</sup> <a name="AppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.appRoles"></a>

```go
func AppRoles() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList</a>

---

##### `CreationMechanism`<sup>Required</sup> <a name="CreationMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationMechanism"></a>

```go
func CreationMechanism() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Grants`<sup>Required</sup> <a name="Grants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.grants"></a>

```go
func Grants() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList</a>

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.owners"></a>

```go
func Owners() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList</a>

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.passwordPolicy"></a>

```go
func PasswordPolicy() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList</a>

---

##### `SyncedFromApp`<sup>Required</sup> <a name="SyncedFromApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.syncedFromApp"></a>

```go
func SyncedFromApp() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags">DefinedTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags">FreeformTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug">TagSlug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.definedTags"></a>

```go
func DefinedTags() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList</a>

---

##### `TagSlug`<sup>Required</sup> <a name="TagSlug" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.tagSlug"></a>

```go
func TagSlug() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionOciTags</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.gidNumber">GidNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GidNumber`<sup>Required</sup> <a name="GidNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.gidNumber"></a>

```go
func GidNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionposixGroup</a>

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference <a name="DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsgroups"

dataociidentitydomainsgroups.NewDataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.requestable">Requestable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Requestable`<sup>Required</sup> <a name="Requestable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.requestable"></a>

```go
func Requestable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsGroups.DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup">DataOciIdentityDomainsGroupsGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup</a>

---



