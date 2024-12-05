# `dataOciDatacatalogCatalogPrivateEndpoint` Submodule <a name="`dataOciDatacatalogCatalogPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatacatalogCatalogPrivateEndpoint <a name="DataOciDatacatalogCatalogPrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoint oci_datacatalog_catalog_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.Initializer"></a>

```typescript
import { dataOciDatacatalogCatalogPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint(scope: Construct, id: string, config: DataOciDatacatalogCatalogPrivateEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig">DataOciDatacatalogCatalogPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig">DataOciDatacatalogCatalogPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatacatalogCatalogPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.isConstruct"></a>

```typescript
import { dataOciDatacatalogCatalogPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.isTerraformElement"></a>

```typescript
import { dataOciDatacatalogCatalogPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.isTerraformDataSource"></a>

```typescript
import { dataOciDatacatalogCatalogPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.generateConfigForImport"></a>

```typescript
import { dataOciDatacatalogCatalogPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatacatalogCatalogPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatacatalogCatalogPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatacatalogCatalogPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatacatalogCatalogPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.attachedCatalogs">attachedCatalogs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.dnsZones">dnsZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList">DataOciDatacatalogCatalogPrivateEndpointLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.catalogPrivateEndpointIdInput">catalogPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.catalogPrivateEndpointId">catalogPrivateEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `attachedCatalogs`<sup>Required</sup> <a name="attachedCatalogs" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.attachedCatalogs"></a>

```typescript
public readonly attachedCatalogs: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dnsZones`<sup>Required</sup> <a name="dnsZones" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.dnsZones"></a>

```typescript
public readonly dnsZones: string[];
```

- *Type:* string[]

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.locks"></a>

```typescript
public readonly locks: DataOciDatacatalogCatalogPrivateEndpointLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList">DataOciDatacatalogCatalogPrivateEndpointLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `catalogPrivateEndpointIdInput`<sup>Optional</sup> <a name="catalogPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.catalogPrivateEndpointIdInput"></a>

```typescript
public readonly catalogPrivateEndpointIdInput: string;
```

- *Type:* string

---

##### `catalogPrivateEndpointId`<sup>Required</sup> <a name="catalogPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.catalogPrivateEndpointId"></a>

```typescript
public readonly catalogPrivateEndpointId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatacatalogCatalogPrivateEndpointConfig <a name="DataOciDatacatalogCatalogPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.Initializer"></a>

```typescript
import { dataOciDatacatalogCatalogPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataOciDatacatalogCatalogPrivateEndpointConfig: dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.catalogPrivateEndpointId">catalogPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoint#catalog_private_endpoint_id DataOciDatacatalogCatalogPrivateEndpoint#catalog_private_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogPrivateEndpointId`<sup>Required</sup> <a name="catalogPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointConfig.property.catalogPrivateEndpointId"></a>

```typescript
public readonly catalogPrivateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoint#catalog_private_endpoint_id DataOciDatacatalogCatalogPrivateEndpoint#catalog_private_endpoint_id}.

---

### DataOciDatacatalogCatalogPrivateEndpointLocks <a name="DataOciDatacatalogCatalogPrivateEndpointLocks" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocks.Initializer"></a>

```typescript
import { dataOciDatacatalogCatalogPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const dataOciDatacatalogCatalogPrivateEndpointLocks: dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatacatalogCatalogPrivateEndpointLocksList <a name="DataOciDatacatalogCatalogPrivateEndpointLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.Initializer"></a>

```typescript
import { dataOciDatacatalogCatalogPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.get"></a>

```typescript
public get(index: number): DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference <a name="DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer"></a>

```typescript
import { dataOciDatacatalogCatalogPrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocks">DataOciDatacatalogCatalogPrivateEndpointLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatacatalogCatalogPrivateEndpointLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoint.DataOciDatacatalogCatalogPrivateEndpointLocks">DataOciDatacatalogCatalogPrivateEndpointLocks</a>

---



