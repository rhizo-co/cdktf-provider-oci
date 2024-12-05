# `dataOciMarketplaceListingPackageAgreements` Submodule <a name="`dataOciMarketplaceListingPackageAgreements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMarketplaceListingPackageAgreements <a name="DataOciMarketplaceListingPackageAgreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements oci_marketplace_listing_package_agreements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer"></a>

```typescript
import { dataOciMarketplaceListingPackageAgreements } from 'rhizo-co-terraform-provider-oci'

new dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements(scope: Construct, id: string, config: DataOciMarketplaceListingPackageAgreementsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig">DataOciMarketplaceListingPackageAgreementsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig">DataOciMarketplaceListingPackageAgreementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMarketplaceListingPackageAgreementsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMarketplaceListingPackageAgreements resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isConstruct"></a>

```typescript
import { dataOciMarketplaceListingPackageAgreements } from 'rhizo-co-terraform-provider-oci'

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformElement"></a>

```typescript
import { dataOciMarketplaceListingPackageAgreements } from 'rhizo-co-terraform-provider-oci'

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformDataSource"></a>

```typescript
import { dataOciMarketplaceListingPackageAgreements } from 'rhizo-co-terraform-provider-oci'

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport"></a>

```typescript
import { dataOciMarketplaceListingPackageAgreements } from 'rhizo-co-terraform-provider-oci'

dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMarketplaceListingPackageAgreements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMarketplaceListingPackageAgreements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMarketplaceListingPackageAgreements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMarketplaceListingPackageAgreements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.agreements">agreements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList">DataOciMarketplaceListingPackageAgreementsAgreementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList">DataOciMarketplaceListingPackageAgreementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.listingIdInput">listingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.packageVersionInput">packageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.packageVersion">packageVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `agreements`<sup>Required</sup> <a name="agreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.agreements"></a>

```typescript
public readonly agreements: DataOciMarketplaceListingPackageAgreementsAgreementsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList">DataOciMarketplaceListingPackageAgreementsAgreementsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.filter"></a>

```typescript
public readonly filter: DataOciMarketplaceListingPackageAgreementsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList">DataOciMarketplaceListingPackageAgreementsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMarketplaceListingPackageAgreementsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.listingIdInput"></a>

```typescript
public readonly listingIdInput: string;
```

- *Type:* string

---

##### `packageVersionInput`<sup>Optional</sup> <a name="packageVersionInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.packageVersionInput"></a>

```typescript
public readonly packageVersionInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreements.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMarketplaceListingPackageAgreementsAgreements <a name="DataOciMarketplaceListingPackageAgreementsAgreements" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreements.Initializer"></a>

```typescript
import { dataOciMarketplaceListingPackageAgreements } from 'rhizo-co-terraform-provider-oci'

const dataOciMarketplaceListingPackageAgreementsAgreements: dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreements = { ... }
```


### DataOciMarketplaceListingPackageAgreementsConfig <a name="DataOciMarketplaceListingPackageAgreementsConfig" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.Initializer"></a>

```typescript
import { dataOciMarketplaceListingPackageAgreements } from 'rhizo-co-terraform-provider-oci'

const dataOciMarketplaceListingPackageAgreementsConfig: dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.listingId">listingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#listing_id DataOciMarketplaceListingPackageAgreements#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.packageVersion">packageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#package_version DataOciMarketplaceListingPackageAgreements#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#compartment_id DataOciMarketplaceListingPackageAgreements#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#id DataOciMarketplaceListingPackageAgreements#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#listing_id DataOciMarketplaceListingPackageAgreements#listing_id}.

---

##### `packageVersion`<sup>Required</sup> <a name="packageVersion" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.packageVersion"></a>

```typescript
public readonly packageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#package_version DataOciMarketplaceListingPackageAgreements#package_version}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#compartment_id DataOciMarketplaceListingPackageAgreements#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMarketplaceListingPackageAgreementsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#filter DataOciMarketplaceListingPackageAgreements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#id DataOciMarketplaceListingPackageAgreements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciMarketplaceListingPackageAgreementsFilter <a name="DataOciMarketplaceListingPackageAgreementsFilter" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.Initializer"></a>

```typescript
import { dataOciMarketplaceListingPackageAgreements } from 'rhizo-co-terraform-provider-oci'

const dataOciMarketplaceListingPackageAgreementsFilter: dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#name DataOciMarketplaceListingPackageAgreements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#values DataOciMarketplaceListingPackageAgreements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#regex DataOciMarketplaceListingPackageAgreements#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#name DataOciMarketplaceListingPackageAgreements#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#values DataOciMarketplaceListingPackageAgreements#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/marketplace_listing_package_agreements#regex DataOciMarketplaceListingPackageAgreements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMarketplaceListingPackageAgreementsAgreementsList <a name="DataOciMarketplaceListingPackageAgreementsAgreementsList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer"></a>

```typescript
import { dataOciMarketplaceListingPackageAgreements } from 'rhizo-co-terraform-provider-oci'

new dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.get"></a>

```typescript
public get(index: number): DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference <a name="DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer"></a>

```typescript
import { dataOciMarketplaceListingPackageAgreements } from 'rhizo-co-terraform-provider-oci'

new dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.contentUrl">contentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.prompt">prompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreements">DataOciMarketplaceListingPackageAgreementsAgreements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `author`<sup>Required</sup> <a name="author" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `contentUrl`<sup>Required</sup> <a name="contentUrl" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.contentUrl"></a>

```typescript
public readonly contentUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.prompt"></a>

```typescript
public readonly prompt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMarketplaceListingPackageAgreementsAgreements;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsAgreements">DataOciMarketplaceListingPackageAgreementsAgreements</a>

---


### DataOciMarketplaceListingPackageAgreementsFilterList <a name="DataOciMarketplaceListingPackageAgreementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer"></a>

```typescript
import { dataOciMarketplaceListingPackageAgreements } from 'rhizo-co-terraform-provider-oci'

new dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.get"></a>

```typescript
public get(index: number): DataOciMarketplaceListingPackageAgreementsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMarketplaceListingPackageAgreementsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>[]

---


### DataOciMarketplaceListingPackageAgreementsFilterOutputReference <a name="DataOciMarketplaceListingPackageAgreementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMarketplaceListingPackageAgreements } from 'rhizo-co-terraform-provider-oci'

new dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMarketplaceListingPackageAgreementsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMarketplaceListingPackageAgreements.DataOciMarketplaceListingPackageAgreementsFilter">DataOciMarketplaceListingPackageAgreementsFilter</a>

---



