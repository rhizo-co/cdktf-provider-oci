# `dataOciDatabaseManagementManagedDatabaseAttentionLogCount` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseAttentionLogCount` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseAttentionLogCount <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count oci_database_management_managed_database_attention_log_count}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCount } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig">DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig">DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetIsRegularExpression">resetIsRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetLogSearchText">resetLogSearchText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTimeGreaterThanOrEqualTo">resetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTimeLessThanOrEqualTo">resetTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTypeFilter">resetTypeFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetUrgencyFilter">resetUrgencyFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetGroupBy"></a>

```typescript
public resetGroupBy(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsRegularExpression` <a name="resetIsRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetIsRegularExpression"></a>

```typescript
public resetIsRegularExpression(): void
```

##### `resetLogSearchText` <a name="resetLogSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetLogSearchText"></a>

```typescript
public resetLogSearchText(): void
```

##### `resetTimeGreaterThanOrEqualTo` <a name="resetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTimeGreaterThanOrEqualTo"></a>

```typescript
public resetTimeGreaterThanOrEqualTo(): void
```

##### `resetTimeLessThanOrEqualTo` <a name="resetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTimeLessThanOrEqualTo"></a>

```typescript
public resetTimeLessThanOrEqualTo(): void
```

##### `resetTypeFilter` <a name="resetTypeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTypeFilter"></a>

```typescript
public resetTypeFilter(): void
```

##### `resetUrgencyFilter` <a name="resetUrgencyFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetUrgencyFilter"></a>

```typescript
public resetUrgencyFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAttentionLogCount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCount } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCount } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCount } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCount } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAttentionLogCount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAttentionLogCount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseAttentionLogCount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAttentionLogCount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList">DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.groupByInput">groupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.isRegularExpressionInput">isRegularExpressionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.logSearchTextInput">logSearchTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.managedDatabaseIdInput">managedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeGreaterThanOrEqualToInput">timeGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeLessThanOrEqualToInput">timeLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.typeFilterInput">typeFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.urgencyFilterInput">urgencyFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.groupBy">groupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.isRegularExpression">isRegularExpression</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.logSearchText">logSearchText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.typeFilter">typeFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.urgencyFilter">urgencyFilter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList">DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList</a>

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.groupByInput"></a>

```typescript
public readonly groupByInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isRegularExpressionInput`<sup>Optional</sup> <a name="isRegularExpressionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.isRegularExpressionInput"></a>

```typescript
public readonly isRegularExpressionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logSearchTextInput`<sup>Optional</sup> <a name="logSearchTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.logSearchTextInput"></a>

```typescript
public readonly logSearchTextInput: string;
```

- *Type:* string

---

##### `managedDatabaseIdInput`<sup>Optional</sup> <a name="managedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.managedDatabaseIdInput"></a>

```typescript
public readonly managedDatabaseIdInput: string;
```

- *Type:* string

---

##### `timeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeLessThanOrEqualToInput"></a>

```typescript
public readonly timeLessThanOrEqualToInput: string;
```

- *Type:* string

---

##### `typeFilterInput`<sup>Optional</sup> <a name="typeFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.typeFilterInput"></a>

```typescript
public readonly typeFilterInput: string;
```

- *Type:* string

---

##### `urgencyFilterInput`<sup>Optional</sup> <a name="urgencyFilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.urgencyFilterInput"></a>

```typescript
public readonly urgencyFilterInput: string;
```

- *Type:* string

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRegularExpression`<sup>Required</sup> <a name="isRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.isRegularExpression"></a>

```typescript
public readonly isRegularExpression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logSearchText`<sup>Required</sup> <a name="logSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.logSearchText"></a>

```typescript
public readonly logSearchText: string;
```

- *Type:* string

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

---

##### `timeGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeGreaterThanOrEqualTo"></a>

```typescript
public readonly timeGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeLessThanOrEqualTo`<sup>Required</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeLessThanOrEqualTo"></a>

```typescript
public readonly timeLessThanOrEqualTo: string;
```

- *Type:* string

---

##### `typeFilter`<sup>Required</sup> <a name="typeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.typeFilter"></a>

```typescript
public readonly typeFilter: string;
```

- *Type:* string

---

##### `urgencyFilter`<sup>Required</sup> <a name="urgencyFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.urgencyFilter"></a>

```typescript
public readonly urgencyFilter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCount } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig: dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.managedDatabaseId">managedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#managed_database_id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.groupBy">groupBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#group_by DataOciDatabaseManagementManagedDatabaseAttentionLogCount#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.isRegularExpression">isRegularExpression</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#is_regular_expression DataOciDatabaseManagementManagedDatabaseAttentionLogCount#is_regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.logSearchText">logSearchText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#log_search_text DataOciDatabaseManagementManagedDatabaseAttentionLogCount#log_search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.typeFilter">typeFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#type_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#type_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.urgencyFilter">urgencyFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#urgency_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#urgency_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedDatabaseId`<sup>Required</sup> <a name="managedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.managedDatabaseId"></a>

```typescript
public readonly managedDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#managed_database_id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#managed_database_id}.

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.groupBy"></a>

```typescript
public readonly groupBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#group_by DataOciDatabaseManagementManagedDatabaseAttentionLogCount#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isRegularExpression`<sup>Optional</sup> <a name="isRegularExpression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.isRegularExpression"></a>

```typescript
public readonly isRegularExpression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#is_regular_expression DataOciDatabaseManagementManagedDatabaseAttentionLogCount#is_regular_expression}.

---

##### `logSearchText`<sup>Optional</sup> <a name="logSearchText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.logSearchText"></a>

```typescript
public readonly logSearchText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#log_search_text DataOciDatabaseManagementManagedDatabaseAttentionLogCount#log_search_text}.

---

##### `timeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.timeGreaterThanOrEqualTo"></a>

```typescript
public readonly timeGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_greater_than_or_equal_to}.

---

##### `timeLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.timeLessThanOrEqualTo"></a>

```typescript
public readonly timeLessThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_less_than_or_equal_to}.

---

##### `typeFilter`<sup>Optional</sup> <a name="typeFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.typeFilter"></a>

```typescript
public readonly typeFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#type_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#type_filter}.

---

##### `urgencyFilter`<sup>Optional</sup> <a name="urgencyFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.urgencyFilter"></a>

```typescript
public readonly urgencyFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#urgency_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#urgency_filter}.

---

### DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCount } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementManagedDatabaseAttentionLogCountItems: dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCount } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementManagedDatabaseAttentionLogCount } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems">DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems">DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems</a>

---



