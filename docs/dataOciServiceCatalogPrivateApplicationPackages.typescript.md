# `dataOciServiceCatalogPrivateApplicationPackages` Submodule <a name="`dataOciServiceCatalogPrivateApplicationPackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceCatalogPrivateApplicationPackages <a name="DataOciServiceCatalogPrivateApplicationPackages" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages oci_service_catalog_private_application_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages(scope: Construct, id: string, config: DataOciServiceCatalogPrivateApplicationPackagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig">DataOciServiceCatalogPrivateApplicationPackagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig">DataOciServiceCatalogPrivateApplicationPackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetPackageType">resetPackageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetPrivateApplicationPackageId">resetPrivateApplicationPackageId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciServiceCatalogPrivateApplicationPackagesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPackageType` <a name="resetPackageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetPackageType"></a>

```typescript
public resetPackageType(): void
```

##### `resetPrivateApplicationPackageId` <a name="resetPrivateApplicationPackageId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.resetPrivateApplicationPackageId"></a>

```typescript
public resetPrivateApplicationPackageId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplicationPackages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isConstruct"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformElement"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformDataSource"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplicationPackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceCatalogPrivateApplicationPackages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceCatalogPrivateApplicationPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceCatalogPrivateApplicationPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList">DataOciServiceCatalogPrivateApplicationPackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationPackageCollection">privateApplicationPackageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.packageTypeInput">packageTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationIdInput">privateApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationPackageIdInput">privateApplicationPackageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.packageType">packageType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationId">privateApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationPackageId">privateApplicationPackageId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.filter"></a>

```typescript
public readonly filter: DataOciServiceCatalogPrivateApplicationPackagesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList">DataOciServiceCatalogPrivateApplicationPackagesFilterList</a>

---

##### `privateApplicationPackageCollection`<sup>Required</sup> <a name="privateApplicationPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationPackageCollection"></a>

```typescript
public readonly privateApplicationPackageCollection: DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciServiceCatalogPrivateApplicationPackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `packageTypeInput`<sup>Optional</sup> <a name="packageTypeInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.packageTypeInput"></a>

```typescript
public readonly packageTypeInput: string[];
```

- *Type:* string[]

---

##### `privateApplicationIdInput`<sup>Optional</sup> <a name="privateApplicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationIdInput"></a>

```typescript
public readonly privateApplicationIdInput: string;
```

- *Type:* string

---

##### `privateApplicationPackageIdInput`<sup>Optional</sup> <a name="privateApplicationPackageIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationPackageIdInput"></a>

```typescript
public readonly privateApplicationPackageIdInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.packageType"></a>

```typescript
public readonly packageType: string[];
```

- *Type:* string[]

---

##### `privateApplicationId`<sup>Required</sup> <a name="privateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationId"></a>

```typescript
public readonly privateApplicationId: string;
```

- *Type:* string

---

##### `privateApplicationPackageId`<sup>Required</sup> <a name="privateApplicationPackageId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.privateApplicationPackageId"></a>

```typescript
public readonly privateApplicationPackageId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceCatalogPrivateApplicationPackagesConfig <a name="DataOciServiceCatalogPrivateApplicationPackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogPrivateApplicationPackagesConfig: dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.privateApplicationId">privateApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#private_application_id DataOciServiceCatalogPrivateApplicationPackages#private_application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#display_name DataOciServiceCatalogPrivateApplicationPackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#id DataOciServiceCatalogPrivateApplicationPackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.packageType">packageType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#package_type DataOciServiceCatalogPrivateApplicationPackages#package_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.privateApplicationPackageId">privateApplicationPackageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#private_application_package_id DataOciServiceCatalogPrivateApplicationPackages#private_application_package_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `privateApplicationId`<sup>Required</sup> <a name="privateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.privateApplicationId"></a>

```typescript
public readonly privateApplicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#private_application_id DataOciServiceCatalogPrivateApplicationPackages#private_application_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#display_name DataOciServiceCatalogPrivateApplicationPackages#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciServiceCatalogPrivateApplicationPackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#filter DataOciServiceCatalogPrivateApplicationPackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#id DataOciServiceCatalogPrivateApplicationPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packageType`<sup>Optional</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.packageType"></a>

```typescript
public readonly packageType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#package_type DataOciServiceCatalogPrivateApplicationPackages#package_type}.

---

##### `privateApplicationPackageId`<sup>Optional</sup> <a name="privateApplicationPackageId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesConfig.property.privateApplicationPackageId"></a>

```typescript
public readonly privateApplicationPackageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#private_application_package_id DataOciServiceCatalogPrivateApplicationPackages#private_application_package_id}.

---

### DataOciServiceCatalogPrivateApplicationPackagesFilter <a name="DataOciServiceCatalogPrivateApplicationPackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogPrivateApplicationPackagesFilter: dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#name DataOciServiceCatalogPrivateApplicationPackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#values DataOciServiceCatalogPrivateApplicationPackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#regex DataOciServiceCatalogPrivateApplicationPackages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#name DataOciServiceCatalogPrivateApplicationPackages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#values DataOciServiceCatalogPrivateApplicationPackages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_private_application_packages#regex DataOciServiceCatalogPrivateApplicationPackages#regex}.

---

### DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection <a name="DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection: dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection = { ... }
```


### DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems <a name="DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

const dataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems: dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceCatalogPrivateApplicationPackagesFilterList <a name="DataOciServiceCatalogPrivateApplicationPackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.get"></a>

```typescript
public get(index: number): DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciServiceCatalogPrivateApplicationPackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>[]

---


### DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference <a name="DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciServiceCatalogPrivateApplicationPackagesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesFilter">DataOciServiceCatalogPrivateApplicationPackagesFilter</a>

---


### DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList <a name="DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference <a name="DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.contentUrl">contentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.packageType">packageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.privateApplicationId">privateApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentUrl`<sup>Required</sup> <a name="contentUrl" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.contentUrl"></a>

```typescript
public readonly contentUrl: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.packageType"></a>

```typescript
public readonly packageType: string;
```

- *Type:* string

---

##### `privateApplicationId`<sup>Required</sup> <a name="privateApplicationId" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.privateApplicationId"></a>

```typescript
public readonly privateApplicationId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItems</a>

---


### DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList <a name="DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.get"></a>

```typescript
public get(index: number): DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference <a name="DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciServiceCatalogPrivateApplicationPackages } from 'rhizo-co-terraform-provider-oci'

new dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceCatalogPrivateApplicationPackages.DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection">DataOciServiceCatalogPrivateApplicationPackagesPrivateApplicationPackageCollection</a>

---



