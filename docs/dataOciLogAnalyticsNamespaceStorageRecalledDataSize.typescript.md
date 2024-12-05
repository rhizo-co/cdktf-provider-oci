# `dataOciLogAnalyticsNamespaceStorageRecalledDataSize` Submodule <a name="`dataOciLogAnalyticsNamespaceStorageRecalledDataSize` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceStorageRecalledDataSize <a name="DataOciLogAnalyticsNamespaceStorageRecalledDataSize" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size oci_log_analytics_namespace_storage_recalled_data_size}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageRecalledDataSize } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize(scope: Construct, id: string, config: DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig">DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig">DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetTimeDataEnded">resetTimeDataEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetTimeDataStarted">resetTimeDataStarted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeDataEnded` <a name="resetTimeDataEnded" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetTimeDataEnded"></a>

```typescript
public resetTimeDataEnded(): void
```

##### `resetTimeDataStarted` <a name="resetTimeDataStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.resetTimeDataStarted"></a>

```typescript
public resetTimeDataStarted(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageRecalledDataSize resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageRecalledDataSize } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageRecalledDataSize } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageRecalledDataSize } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageRecalledDataSize } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageRecalledDataSize resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceStorageRecalledDataSize to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsNamespaceStorageRecalledDataSize that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceStorageRecalledDataSize to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.notRecalledDataInBytes">notRecalledDataInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.recalledDataInBytes">recalledDataInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataEndedInput">timeDataEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataStartedInput">timeDataStartedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataEnded">timeDataEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataStarted">timeDataStarted</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `notRecalledDataInBytes`<sup>Required</sup> <a name="notRecalledDataInBytes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.notRecalledDataInBytes"></a>

```typescript
public readonly notRecalledDataInBytes: string;
```

- *Type:* string

---

##### `recalledDataInBytes`<sup>Required</sup> <a name="recalledDataInBytes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.recalledDataInBytes"></a>

```typescript
public readonly recalledDataInBytes: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `timeDataEndedInput`<sup>Optional</sup> <a name="timeDataEndedInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataEndedInput"></a>

```typescript
public readonly timeDataEndedInput: string;
```

- *Type:* string

---

##### `timeDataStartedInput`<sup>Optional</sup> <a name="timeDataStartedInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataStartedInput"></a>

```typescript
public readonly timeDataStartedInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `timeDataEnded`<sup>Required</sup> <a name="timeDataEnded" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataEnded"></a>

```typescript
public readonly timeDataEnded: string;
```

- *Type:* string

---

##### `timeDataStarted`<sup>Required</sup> <a name="timeDataStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.timeDataStarted"></a>

```typescript
public readonly timeDataStarted: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSize.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig <a name="DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceStorageRecalledDataSize } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig: dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#namespace DataOciLogAnalyticsNamespaceStorageRecalledDataSize#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#id DataOciLogAnalyticsNamespaceStorageRecalledDataSize#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.timeDataEnded">timeDataEnded</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_ended DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.timeDataStarted">timeDataStarted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_started DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_started}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#namespace DataOciLogAnalyticsNamespaceStorageRecalledDataSize#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#id DataOciLogAnalyticsNamespaceStorageRecalledDataSize#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeDataEnded`<sup>Optional</sup> <a name="timeDataEnded" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.timeDataEnded"></a>

```typescript
public readonly timeDataEnded: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_ended DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_ended}.

---

##### `timeDataStarted`<sup>Optional</sup> <a name="timeDataStarted" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageRecalledDataSize.DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig.property.timeDataStarted"></a>

```typescript
public readonly timeDataStarted: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_started DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_started}.

---



