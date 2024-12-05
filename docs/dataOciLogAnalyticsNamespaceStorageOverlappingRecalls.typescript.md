# `dataOciLogAnalyticsNamespaceStorageOverlappingRecalls` Submodule <a name="`dataOciLogAnalyticsNamespaceStorageOverlappingRecalls` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceStorageOverlappingRecalls <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecalls" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls oci_log_analytics_namespace_storage_overlapping_recalls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls(scope: Construct, id: string, config: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetTimeDataEnded">resetTimeDataEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetTimeDataStarted">resetTimeDataStarted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeDataEnded` <a name="resetTimeDataEnded" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetTimeDataEnded"></a>

```typescript
public resetTimeDataEnded(): void
```

##### `resetTimeDataStarted` <a name="resetTimeDataStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.resetTimeDataStarted"></a>

```typescript
public resetTimeDataStarted(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageOverlappingRecalls resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageOverlappingRecalls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceStorageOverlappingRecalls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsNamespaceStorageOverlappingRecalls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceStorageOverlappingRecalls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.overlappingRecallCollection">overlappingRecallCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataEndedInput">timeDataEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataStartedInput">timeDataStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataEnded">timeDataEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataStarted">timeDataStarted</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.filter"></a>

```typescript
public readonly filter: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList</a>

---

##### `overlappingRecallCollection`<sup>Required</sup> <a name="overlappingRecallCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.overlappingRecallCollection"></a>

```typescript
public readonly overlappingRecallCollection: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `timeDataEndedInput`<sup>Optional</sup> <a name="timeDataEndedInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataEndedInput"></a>

```typescript
public readonly timeDataEndedInput: string;
```

- *Type:* string

---

##### `timeDataStartedInput`<sup>Optional</sup> <a name="timeDataStartedInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataStartedInput"></a>

```typescript
public readonly timeDataStartedInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `timeDataEnded`<sup>Required</sup> <a name="timeDataEnded" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataEnded"></a>

```typescript
public readonly timeDataEnded: string;
```

- *Type:* string

---

##### `timeDataStarted`<sup>Required</sup> <a name="timeDataStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.timeDataStarted"></a>

```typescript
public readonly timeDataStarted: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecalls.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig: dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#namespace DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#id DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.timeDataEnded">timeDataEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_ended DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.timeDataStarted">timeDataStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_started DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_started}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#namespace DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#filter DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#id DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeDataEnded`<sup>Optional</sup> <a name="timeDataEnded" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.timeDataEnded"></a>

```typescript
public readonly timeDataEnded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_ended DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_ended}.

---

##### `timeDataStarted`<sup>Optional</sup> <a name="timeDataStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsConfig.property.timeDataStarted"></a>

```typescript
public readonly timeDataStarted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#time_data_started DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#time_data_started}.

---

### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter: dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#name DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#values DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#regex DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#name DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#values DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_overlapping_recalls#regex DataOciLogAnalyticsNamespaceStorageOverlappingRecalls#regex}.

---

### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection: dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection = { ... }
```


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems: dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>[]

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsFilter</a>

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.logSets">logSets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.recallId">recallId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeDataEnded">timeDataEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeDataStarted">timeDataStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `logSets`<sup>Required</sup> <a name="logSets" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.logSets"></a>

```typescript
public readonly logSets: string;
```

- *Type:* string

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `recallId`<sup>Required</sup> <a name="recallId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.recallId"></a>

```typescript
public readonly recallId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeDataEnded`<sup>Required</sup> <a name="timeDataEnded" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeDataEnded"></a>

```typescript
public readonly timeDataEnded: string;
```

- *Type:* string

---

##### `timeDataStarted`<sup>Required</sup> <a name="timeDataStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeDataStarted"></a>

```typescript
public readonly timeDataStarted: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItems</a>

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference <a name="DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageOverlappingRecalls } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageOverlappingRecalls.DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection">DataOciLogAnalyticsNamespaceStorageOverlappingRecallsOverlappingRecallCollection</a>

---



