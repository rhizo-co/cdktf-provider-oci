# `dataOciServiceCatalogServiceCatalogAssociations` Submodule <a name="`dataOciServiceCatalogServiceCatalogAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogServiceCatalogAssociations <a name="DataOciServiceCatalogServiceCatalogAssociations" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations oci_service_catalog_service_catalog_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations(scope: Construct, id: string, config?: DataOciServiceCatalogServiceCatalogAssociationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig">DataOciServiceCatalogServiceCatalogAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig">DataOciServiceCatalogServiceCatalogAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetEntityId">resetEntityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetEntityType">resetEntityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetServiceCatalogAssociationId">resetServiceCatalogAssociationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetServiceCatalogId">resetServiceCatalogId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciServiceCatalogServiceCatalogAssociationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>[]

---

##### `resetEntityId` <a name="resetEntityId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetEntityId"></a>

```typescript
public resetEntityId(): void
```

##### `resetEntityType` <a name="resetEntityType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetEntityType"></a>

```typescript
public resetEntityType(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetServiceCatalogAssociationId` <a name="resetServiceCatalogAssociationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetServiceCatalogAssociationId"></a>

```typescript
public resetServiceCatalogAssociationId(): void
```

##### `resetServiceCatalogId` <a name="resetServiceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.resetServiceCatalogId"></a>

```typescript
public resetServiceCatalogId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isConstruct"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformElement"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformDataSource"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceCatalogServiceCatalogAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceCatalogServiceCatalogAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogServiceCatalogAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList">DataOciServiceCatalogServiceCatalogAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationCollection">serviceCatalogAssociationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationIdInput">serviceCatalogAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogIdInput">serviceCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationId">serviceCatalogAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogId">serviceCatalogId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.filter"></a>

```typescript
public readonly filter: DataOciServiceCatalogServiceCatalogAssociationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList">DataOciServiceCatalogServiceCatalogAssociationsFilterList</a>

---

##### `serviceCatalogAssociationCollection`<sup>Required</sup> <a name="serviceCatalogAssociationCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationCollection"></a>

```typescript
public readonly serviceCatalogAssociationCollection: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList</a>

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciServiceCatalogServiceCatalogAssociationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceCatalogAssociationIdInput`<sup>Optional</sup> <a name="serviceCatalogAssociationIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationIdInput"></a>

```typescript
public readonly serviceCatalogAssociationIdInput: string;
```

- *Type:* string

---

##### `serviceCatalogIdInput`<sup>Optional</sup> <a name="serviceCatalogIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogIdInput"></a>

```typescript
public readonly serviceCatalogIdInput: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceCatalogAssociationId`<sup>Required</sup> <a name="serviceCatalogAssociationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogAssociationId"></a>

```typescript
public readonly serviceCatalogAssociationId: string;
```

- *Type:* string

---

##### `serviceCatalogId`<sup>Required</sup> <a name="serviceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.serviceCatalogId"></a>

```typescript
public readonly serviceCatalogId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogServiceCatalogAssociationsConfig <a name="DataOciServiceCatalogServiceCatalogAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogServiceCatalogAssociationsConfig: dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.entityId">entityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_id DataOciServiceCatalogServiceCatalogAssociations#entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.entityType">entityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_type DataOciServiceCatalogServiceCatalogAssociations#entity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#id DataOciServiceCatalogServiceCatalogAssociations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.serviceCatalogAssociationId">serviceCatalogAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.serviceCatalogId">serviceCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entityId`<sup>Optional</sup> <a name="entityId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_id DataOciServiceCatalogServiceCatalogAssociations#entity_id}.

---

##### `entityType`<sup>Optional</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#entity_type DataOciServiceCatalogServiceCatalogAssociations#entity_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciServiceCatalogServiceCatalogAssociationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#filter DataOciServiceCatalogServiceCatalogAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#id DataOciServiceCatalogServiceCatalogAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceCatalogAssociationId`<sup>Optional</sup> <a name="serviceCatalogAssociationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.serviceCatalogAssociationId"></a>

```typescript
public readonly serviceCatalogAssociationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_association_id}.

---

##### `serviceCatalogId`<sup>Optional</sup> <a name="serviceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsConfig.property.serviceCatalogId"></a>

```typescript
public readonly serviceCatalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_id}.

---

### DataOciServiceCatalogServiceCatalogAssociationsFilter <a name="DataOciServiceCatalogServiceCatalogAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogServiceCatalogAssociationsFilter: dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#name DataOciServiceCatalogServiceCatalogAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#values DataOciServiceCatalogServiceCatalogAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#regex DataOciServiceCatalogServiceCatalogAssociations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#name DataOciServiceCatalogServiceCatalogAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#values DataOciServiceCatalogServiceCatalogAssociations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_associations#regex DataOciServiceCatalogServiceCatalogAssociations#regex}.

---

### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection: dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection = { ... }
```


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems: dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceCatalogServiceCatalogAssociationsFilterList <a name="DataOciServiceCatalogServiceCatalogAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.get"></a>

```typescript
public get(index: number): DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciServiceCatalogServiceCatalogAssociationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>[]

---


### DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference <a name="DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciServiceCatalogServiceCatalogAssociationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsFilter">DataOciServiceCatalogServiceCatalogAssociationsFilter</a>

---


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.serviceCatalogId">serviceCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceCatalogId`<sup>Required</sup> <a name="serviceCatalogId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.serviceCatalogId"></a>

```typescript
public readonly serviceCatalogId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems</a>

---


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.get"></a>

```typescript
public get(index: number): DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference <a name="DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciServiceCatalogServiceCatalogAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogServiceCatalogAssociations.DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection">DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection</a>

---



