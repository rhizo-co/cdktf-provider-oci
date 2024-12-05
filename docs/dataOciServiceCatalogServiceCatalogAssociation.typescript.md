# `dataOciServiceCatalogServiceCatalogAssociation` Submodule <a name="`dataOciServiceCatalogServiceCatalogAssociation` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogServiceCatalogAssociation <a name="DataOciServiceCatalogServiceCatalogAssociation" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association oci_service_catalog_service_catalog_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation(scope: Construct, id: string, config: DataOciServiceCatalogServiceCatalogAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig">DataOciServiceCatalogServiceCatalogAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig">DataOciServiceCatalogServiceCatalogAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isConstruct"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformElement"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformDataSource"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceCatalogServiceCatalogAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceCatalogServiceCatalogAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogServiceCatalogAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.serviceCatalogId">serviceCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.serviceCatalogAssociationIdInput">serviceCatalogAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.serviceCatalogAssociationId">serviceCatalogAssociationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceCatalogId`<sup>Required</sup> <a name="serviceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.serviceCatalogId"></a>

```typescript
public readonly serviceCatalogId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `serviceCatalogAssociationIdInput`<sup>Optional</sup> <a name="serviceCatalogAssociationIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.serviceCatalogAssociationIdInput"></a>

```typescript
public readonly serviceCatalogAssociationIdInput: string;
```

- *Type:* string

---

##### `serviceCatalogAssociationId`<sup>Required</sup> <a name="serviceCatalogAssociationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.serviceCatalogAssociationId"></a>

```typescript
public readonly serviceCatalogAssociationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogServiceCatalogAssociationConfig <a name="DataOciServiceCatalogServiceCatalogAssociationConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociation } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogServiceCatalogAssociationConfig: dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.serviceCatalogAssociationId">serviceCatalogAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociation#service_catalog_association_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceCatalogAssociationId`<sup>Required</sup> <a name="serviceCatalogAssociationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociation.DataOciServiceCatalogServiceCatalogAssociationConfig.property.serviceCatalogAssociationId"></a>

```typescript
public readonly serviceCatalogAssociationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociation#service_catalog_association_id}.

---



