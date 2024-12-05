# `dataOciServiceCatalogServiceCatalog` Submodule <a name="`dataOciServiceCatalogServiceCatalog` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogServiceCatalog <a name="DataOciServiceCatalogServiceCatalog" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog oci_service_catalog_service_catalog}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalog } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog(scope: Construct, id: string, config: DataOciServiceCatalogServiceCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig">DataOciServiceCatalogServiceCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig">DataOciServiceCatalogServiceCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.isConstruct"></a>

```typescript
import { dataOciServiceCatalogServiceCatalog } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.isTerraformElement"></a>

```typescript
import { dataOciServiceCatalogServiceCatalog } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.isTerraformDataSource"></a>

```typescript
import { dataOciServiceCatalogServiceCatalog } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.generateConfigForImport"></a>

```typescript
import { dataOciServiceCatalogServiceCatalog } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceCatalogServiceCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceCatalogServiceCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogServiceCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.serviceCatalogIdInput">serviceCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.serviceCatalogId">serviceCatalogId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `serviceCatalogIdInput`<sup>Optional</sup> <a name="serviceCatalogIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.serviceCatalogIdInput"></a>

```typescript
public readonly serviceCatalogIdInput: string;
```

- *Type:* string

---

##### `serviceCatalogId`<sup>Required</sup> <a name="serviceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.serviceCatalogId"></a>

```typescript
public readonly serviceCatalogId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogServiceCatalogConfig <a name="DataOciServiceCatalogServiceCatalogConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalog } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogServiceCatalogConfig: dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.serviceCatalogId">serviceCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog#service_catalog_id DataOciServiceCatalogServiceCatalog#service_catalog_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceCatalogId`<sup>Required</sup> <a name="serviceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalog.DataOciServiceCatalogServiceCatalogConfig.property.serviceCatalogId"></a>

```typescript
public readonly serviceCatalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog#service_catalog_id DataOciServiceCatalogServiceCatalog#service_catalog_id}.

---



